'use client';

import { ApodGrid } from "@/applications/apod/components/ApodGrid";
import { useAppSelector } from "@/store";
import { HeartOff } from "lucide-react";
import Link from "next/link";

const NoFavorites = () => {
    return (
        <>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                😞 You haven't selected any image...
            </h2>
            <p>
                You can grab them from the <Link href="/apod">api response</Link> by clicking in the <HeartOff className="inline rounded-full text-red-400" /> icon.
            </p>
        </>
    )
}

const Favorites = () => {
    return (
        <>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                😍 Your favorites images
            </h2>
        </>
    )
}

const FavoritesGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Favorites />
            <div className="grid grid-cols-3 gap-4">
                {children}
            </div>
        </>
    )
}

export const ApodFavorites = () => {
    const apodFavoritesList = useAppSelector(store => Object.values(store.apodFavorites));
    return apodFavoritesList.length
        ? (<FavoritesGrid><ApodGrid apods={apodFavoritesList} /></FavoritesGrid>)
        : (<NoFavorites />)
}