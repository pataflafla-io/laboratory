'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface Props {
    initialValue?: number
}
export const Counter = ({ initialValue = 0 }: Props) => {
    const [value, setvalue] = useState(initialValue);
    const handleAddClick = () => {
        setvalue(value + 1)
    }
    const handleResetClick = () => {
        setvalue(0)
    }
    const handleSubstractClick = () => {
        if (value === 0) return
        setvalue(value - 1)
    }

    return (
        <div className='flex flex-col mt-10 mb-10'>

            <h2 className="text-3xl font-semibold tracking-tight">
                Current value: {value}
            </h2>
            <div className='flex gap-3 mt-5'>
                <Button onClick={handleSubstractClick}>-1</Button>
                <Button onClick={handleResetClick}>reset to zero</Button>
                <Button onClick={handleAddClick}>+1</Button>
            </div>
        </div>
    )
}
