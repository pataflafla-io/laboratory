'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { add } from '../actions/todo-actions';

export const AddTodo = () => {

    const [description, setDescription] = useState('')
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (description.trim().length < 5) return;
        const post = await add(description);
        setDescription('')
    }

    return (
        <form className='flex gap-2' onSubmit={onSubmit}>
            <Input
                placeholder="what will you do?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="max-w-sm"
            />
            <Button className='cursor-pointer' type='submit' >Add Todo</Button>
        </form>
    )
}
