'use server'

import { Todo } from "@/lib/generated/prisma/client"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface Props {
    id: string,
    status: boolean,
}

export const add = async (description: string): Promise<Todo> => {
    try {

        const create = await prisma.todo.create({ data: { description } });
        revalidatePath('/todo-with-server-actions')
        return create;
    } catch (e) {
        throw "Error"
    }
}

export const update = async (id: string, status: boolean): Promise<Todo> => {
    try {
        const todo = await prisma.todo.findUnique({ where: { id } })
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { completed: status }
        })

        revalidatePath('/todo-with-server-actions')
        return updatedTodo;
    } catch (e) {
        throw "Error"
    }
}


export const remove = async (): Promise<void> => {

    try {
        const todoDeleted = await prisma.todo.deleteMany({
            where: { completed: true },
        });
        revalidatePath('/todo-with-server-actions')
    } catch (e) {
        throw e;
    }
}