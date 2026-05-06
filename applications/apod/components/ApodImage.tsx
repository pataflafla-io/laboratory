'use client'
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

interface Props {
    alt: string,
    src: string,
}

const TheImage = ({ src, alt }: Props) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={512}
            height={512}
            className="relative z-20 mt-5 mb-5 w-full object-cover"
            onLoad={() => console.log('end')}
        />
    )
}
export const ApodImage = ({ src, alt }: Props) => {
    const [first, setfirst] = useState(false)
    return (
        <div>
            {(!first ? <Spinner /> : <></>)}

            <Image
                src={src}
                alt={alt}
                width={512}
                height={512}
                className="relative z-20 mt-5 mb-5 w-full object-cover"
                onLoad={() => setfirst(true)}
            />
        </div>
    )
}
