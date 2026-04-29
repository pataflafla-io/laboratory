import { NasaResponse } from "@/applications/apod/interfaces/NasaResponse";
import { Metadata } from "next";


import Image from "next/image";
import { notFound } from "next/navigation";


interface Props {
    params: {
        date: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { date } = await params;
    const { title, explanation: description } = await getApod(date)
    return {
        title,
        description
    }
}

const getApod = async (date: string): Promise<NasaResponse> => {
    try {
        const env = process.env.NASA_KEY;
        const data: NasaResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${env}&date=${date}`)
            .then(response => response.json());
        return data;
    } catch (error) {
        return {} as NasaResponse;
    }
}


export default async function NamePage({ params }: Props) {
    const { date } = await params;
    const { title, explanation, url, code } = await getApod(date)
    if (code) notFound()

    return (
        <>
            <h1 className="block text-4xl mb-3">
                {title}
            </h1>
            {explanation}
            <Image
                src={url}
                alt={title}
                width={512}
                height={512}
                className="relative z-20 mt-5 mb-5 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                priority={false}
            />



        </>
    );
}
