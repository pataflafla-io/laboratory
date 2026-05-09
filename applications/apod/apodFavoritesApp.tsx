'use client';

import { ApodGrid } from "@/applications/apod/components/ApodGrid";
import { useAppSelector } from "@/store";

export const ApodFavorites = () => {
    const apodFavoritesList = useAppSelector(store => store.apodFavorites);

    return (
        <ApodGrid apods={Object.values(apodFavoritesList)} />
    )
}
