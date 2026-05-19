'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import * as api from '@/applications/todoWithRestApi/api/todo'

export const RemoveTodo = () => {
    const router = useRouter();
    const deleteTodosHandler = async () => {
        const post = await api.deleteTodos();
        router.refresh()
    }

    return (
        <Button className='cursor-pointer dark:text-white' variant={'destructive'} onClick={deleteTodosHandler} >Delete Completed Todo(s)</Button>
    )
}
