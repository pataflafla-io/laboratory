'use client'

import { Button } from '@/components/ui/button'
import { update } from '../actions/todo-actions'

interface Props {
    id: string,
    status: string,
}

export const UpdateTodo = ({ id, status }: Props) => {
    return (
        <Button className={`capitalize cursor-pointer text-white transition-all duration-300 ${status === 'completed' ? 'bg-emerald-600 dark:bg-green-600 dark:hover:bg-green-400 hover:bg-emerald-800 hover:text-white dark:text-black' : 'bg-pink-600 hover:bg-pink-800 hover:text-white dark:bg-red-600 dark:hover:bg-red-400'}`} variant={'outline'} onClick={() => update(id, status === 'completed' ? false : true)}>
            {status}
        </Button>
    )
}
