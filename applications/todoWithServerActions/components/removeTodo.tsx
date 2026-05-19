'use client'

import { Button } from '@/components/ui/button'
import { remove } from '../actions/todo-actions';

export const RemoveTodo = () => {
    const deleteTodosHandler = async () => {
        await remove();
    }

    return (
        <Button className='cursor-pointer dark:text-white' variant={'destructive'} onClick={deleteTodosHandler} >Delete Completed Todo(s)</Button>
    )
}
