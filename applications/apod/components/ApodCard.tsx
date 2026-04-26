import Image from "next/image"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SimpleApod } from "../interfaces/SimpleApod";

interface Props {
    apod: SimpleApod
}
export const ApodCard = ({ apod }: Props) => {
    const { date, title, url } = apod;
    return (
        <Item variant="outline">
            <ItemHeader>
                <Image
                    src={url}
                    alt={title}
                    width={96}
                    height={96}
                    className="aspect-square w-full rounded-sm object-cover"
                />
            </ItemHeader>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
            </ItemContent>
            <ItemActions>
                <Button
                    size="icon-sm"
                    variant="outline"
                    className="rounded-full"
                    aria-label="Invite"
                >
                    <Plus />
                </Button>
            </ItemActions>
        </Item>
    )
}
