import { Todo } from "@/lib/generated/prisma/client"

export const addTodo = async (description: string): Promise<Todo> => {
    const body = { description }
    const todo = await fetch(`/api/todos/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }

    }).then(response => response.json());
    return todo;
}

export const updateTodo = async (id: String, completed: boolean): Promise<Todo> => {
    const body = { completed }
    const todo = await fetch(`/api/todos/${id}?no-cache=${Date.now()}`, {
        cache: 'no-store',
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }

    }).then(response => response.json());
    return todo;
}

export const deleteTodos = async (): Promise<number> => {
    const deleteTodos = await fetch(`/api/todos/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }

    }).then(response => response.json());
    console.log(deleteTodos)
    return deleteTodos;
}
