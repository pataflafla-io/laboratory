'use client'

import { useRouter } from "next/navigation"
import { Button } from '@/components/ui/button'
import * as api from '@/applications/todoWithRestApi/api/todo'

interface Props {
    id: String,
    status: String,
}

export const UpdateTodo = ({ id, status }: Props) => {
    const router = useRouter();
    return (
        <Button className={`capitalize cursor-pointer text-white transition-all duration-300 ${status === 'completed' ? 'bg-emerald-600 dark:bg-green-600 dark:hover:bg-green-400 hover:bg-emerald-800 hover:text-white dark:text-black' : 'bg-pink-600 hover:bg-pink-800 hover:text-white dark:bg-red-600 dark:hover:bg-red-400'}`} variant={'outline'} onClick={async () => {
            await api.updateTodo(id, status === 'completed' ? false : true)
            router.refresh();
        }}>
            {status}
        </Button>
    )
}
