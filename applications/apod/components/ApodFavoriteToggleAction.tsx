'use client'


import { useDispatch } from "react-redux"
import { useAppSelector } from "@/store"
import { toggleFavorite } from "@/store/apod/apodFavoritesSlice"
import { Button } from "@/components/ui/button"
import { Heart, HeartOff } from "lucide-react"
import { SimpleApod } from "../interfaces/SimpleApod"


interface Props {
    apod: SimpleApod;
}

export const ApodFavoriteToggleAction = ({ apod }: Props) => {
    const { date } = apod;
    const isFavorite = useAppSelector((state) => !!state.apodFavorites[date]);
    const dispatch = useDispatch();
    return (
        <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full cursor-pointer text-red-400 transition-colors duration-300 hover:text-red-200"
            aria-label="Invite"
            onClick={() => dispatch(toggleFavorite(apod))}
        >
            {!!isFavorite ? <Heart /> : <HeartOff />}
        </Button>
    )
}
