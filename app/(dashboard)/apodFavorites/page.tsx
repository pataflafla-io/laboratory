import type { Metadata } from "next";
import Link from "next/link";
import { ApodFavorites } from "@/applications/apod/apodFavoritesApp";
import { ItemGroup } from "@/components/ui/item";

export const metadata: Metadata = {
    title: "APoD favorites",
    description: "My Astronomy Picture of the Day favorites.",
};

export default function ApodFavoritesMainPage() {
    return (
        <>
            <h1 className="block text-2xl mb-3">
                <Link href='https://redux-toolkit.js.org/introduction/getting-started' target='_blank'>Redux + Redux Toolkit</Link>
            </h1>
            <div className="flex flex-col items-start mt-5">
                <p>@ToDo: Update this document</p>
            </div>
            <hr className="mt-5 mb-5" />
            <ItemGroup className="mt-5 mb-5">
                <ApodFavorites />
            </ItemGroup>
        </>
    );
}