import {
    ItemGroup,
} from "@/components/ui/item"


import { MediaType, NasaResponse } from './interfaces/NasaResponse';
import { SimpleApod } from "./interfaces/SimpleApod";

import { ApodGrid } from "@/applications/apod/components/ApodGrid";

const substractingDays = (howManyDays: number): string => {
    const date = new Date();
    date.setDate(date.getDate() - howManyDays);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
}

const getApods = async (howMany: number): Promise<SimpleApod[]> => {

    const env = process.env.NASA_KEY;
    const limit = substractingDays(howMany)
    const data: NasaResponse[] = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${env}&start_date=${limit}`)
        .then(response => response.json());

    const apods: SimpleApod[] = data.filter((apod) => apod.media_type === MediaType.Image)
        .map(({ date, title, url }: NasaResponse) => ({ date, title, url }))
    return apods;
}

export const Apod = async () => {
    const apods = await getApods(9)
    return (
        <ItemGroup className="grid grid-cols-3 gap-4 mt-5 mb-5">
            <ApodGrid apods={apods} />
        </ItemGroup>
    )
}
