'use client';

import { Button } from "@/components/ui/button"
import { addOne, substractOne, resetCount, fetchInitialData } from '@/store/counter/counterSlice';
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";

interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const { isReady, count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchInitialData())
    }, [dispatch])

    const handleAddClick = () => {
        dispatch(addOne())
    }
    const handleResetClick = () => {
        dispatch(resetCount(0))
    }
    const handleSubstractClick = () => {
        dispatch(substractOne())
    }

    return (
        <div className='flex flex-col mt-10 mb-10'>

            <h2 className="text-3xl font-semibold tracking-tight">
                {!isReady ? <>retrieving value from /api/counter</> : `Current value: ${count}`}
            </h2>
            <div className='flex gap-3 mt-5'>
                <Button disabled={!isReady} onClick={handleSubstractClick}>-1</Button>
                <Button disabled={!isReady} onClick={handleResetClick}>reset to zero</Button>
                <Button disabled={!isReady} onClick={handleAddClick}>+1</Button>
            </div>
        </div>
    )
}
