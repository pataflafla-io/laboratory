
import { SimpleApod } from "../interfaces/SimpleApod";
import { ApodCard } from "./ApodCard";

interface Props {
    apods: SimpleApod[]
}

export const ApodGrid = ({ apods }: Props) => {
    return (
        <>
            {apods.map((apod) => (
                <ApodCard key={apod.date} apod={apod} />
            ))
            }
        </>

    )
}
