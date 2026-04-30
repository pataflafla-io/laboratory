import Image from "next/image"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item"
import { SimpleApod } from "../interfaces/SimpleApod";
import { ApodAction } from "./ApodAction";

interface Props {
    apod: SimpleApod
}
export const ApodCard = ({ apod }: Props) => {
    const { date: url, title, url: imageUrl } = apod;
    return (
        <Item variant="outline">
            <ItemHeader>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={256}
                    height={256}
                    className="aspect-square w-full rounded-sm object-cover grayscale brightness-50"
                    priority={false}
                />
            </ItemHeader>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
            </ItemContent>
            <ItemActions>
                <ApodAction url={url} />
            </ItemActions>
        </Item>
    )
}
