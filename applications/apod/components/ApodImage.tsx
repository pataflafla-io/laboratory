'use client'

import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { useState } from "react";

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
    const [isImageLoaded, setisImageLoaded] = useState(false)
    return (
        <div className="mt-5 flex flex-col items-center">
            {(!isImageLoaded
                ? <div className="flex gap-4">
                    <Item variant="muted">
                        <ItemMedia>
                            <Spinner />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle className="line-clamp-1">loading image...</ItemTitle>
                        </ItemContent>
                    </Item>
                </div>
                : <></>)}

            <Image
                src={src}
                alt={alt}
                width={512}
                height={512}
                placeholder="empty"
                className="rmt-5 mb-5 w-full object-cover rounded-x grayscale transition-all duration-500 hover:grayscale-0"
                onLoad={() => setisImageLoaded(true)}
            />
        </div>
    )
}
