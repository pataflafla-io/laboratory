'use client';

import { Button } from "@/components/ui/button"
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { addOne, substractOne, resetCount } from '@/store/counter/counterSlice';
import { CounterResponse } from '@/app/api/counter/CounterResponse';

interface Props {
    initialValue?: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(response => response.json())
    return data;
}

export const Counter = ({ initialValue = 0 }: Props) => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    //const [value, setvalue] = useState(initialValue);
    const handleAddClick = () => {
        //setvalue(value + 1)
        dispatch(addOne())
    }
    const handleResetClick = () => {
        //setvalue(0)
        dispatch(resetCount(0))
    }
    const handleSubstractClick = () => {
        //if (value === 0) return
        //setvalue(value - 1)
        dispatch(substractOne())
    }

    return (
        <div className='flex flex-col mt-10 mb-10'>

            <h2 className="text-3xl font-semibold tracking-tight">
                Current value: {count}
            </h2>
            <div className='flex gap-3 mt-5'>
                <Button onClick={handleSubstractClick}>-1</Button>
                <Button onClick={handleResetClick}>reset to zero</Button>
                <Button onClick={handleAddClick}>+1</Button>
            </div>
        </div>
    )
}
