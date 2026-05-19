'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { startTransition, useOptimistic } from "react"


interface Props {
    init: {
        isFetched: boolean
    },
    toggle: (isFetched: boolean) => Promise<boolean>
}
export function OptimisticApp({ init, toggle }: Props) {

    const [toggleHelperOptmistic, setToggleHelperOptimistic] = useOptimistic(
        init,
        (state, newCompleteValue: boolean) => (
            {
                ...state,
                isFetched: newCompleteValue
            }
        )
    );
    const uoHandler = async () => {
        try {
            startTransition(() => setToggleHelperOptimistic(!toggleHelperOptmistic.isFetched))
            console.log("Before async function call:", { init })
            console.log("Value passed:", !toggleHelperOptmistic.isFetched)
            await toggle(!toggleHelperOptmistic.isFetched);
            console.log("UI repaint:")

        } catch (e) {
            startTransition(() => setToggleHelperOptimistic(!toggleHelperOptmistic.isFetched))
        }
    }
    console.log("Value received:", { init })
    return (
        <div className="flex w-full flex-wrap gap-2">
            <Button className="cursor-pointer" variant="link" onClick={uoHandler}>Call server function</Button>
            <Badge className={`p-4 ${toggleHelperOptmistic.isFetched === false ? 'bg-red-700' : 'bg-emerald-700'}`}>Value: {JSON.stringify(init.isFetched)}</Badge>
        </div >
    )
}
