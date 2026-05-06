import { ApodImage } from "@/applications/apod/components/ApodImage";
import { NasaResponse } from "@/applications/apod/interfaces/NasaResponse";
import { substractingDaysFromToday } from "@/lib/helpers/substractsDaysFromToday";
import { Metadata } from "next";
import { cacheTag } from "next/cache";
import Link from "next/link";

import { notFound } from "next/navigation";
import { HeartIcon } from 'lucide-react';


interface Props {
    params: {
        date: string
    }
}

export async function generateStaticParams() {
    const env = process.env.NASA_KEY;
    return Array.from({ length: 100 })
        .map((value, index) => {
            return {
                'api_key': env,
                'date': substractingDaysFromToday(index)
            }
        })
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
    'use cache';
    cacheTag('apod', date);
    try {
        const env = process.env.NASA_KEY;
        const data: NasaResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${env}&date=${date}`)
            .then(response => response.json());
        return data;
    } catch (error) {
        notFound()
    }
}

export default async function ApodSinglePage({ params }: Props) {
    const { date } = await params;

    const { title, explanation, hdurl, url, code } = await getApod(date);

    return (
        <>
            {code && notFound()}
            <h1 className="text-4xl mb-3 flex items-center justify-between">
                {title}
                <Link href=""><HeartIcon /></Link>
            </h1>
            {explanation}

            <ApodImage src={url} alt={title} />
        </>
    );
}
