'use client'

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

interface Props {
    url: string
}

export const ApodAction = ({ url }: Props) => {

    return (
        <Button
            asChild
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
        >
            <Link href={`apod/${url}`}>
                <Plus />
            </Link>
        </Button>
    )
}
