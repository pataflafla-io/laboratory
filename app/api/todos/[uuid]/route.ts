import { Todo } from '@/lib/generated/prisma/client'
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

type Segments = Promise<{ uuid: string }>

export async function GET(request: Request, { params }: { params: Segments }) {

    const { uuid } = await params;

    const todo: Todo | null = await prisma.todo.findUnique({
        where: { id: uuid },
    });

    if (!todo) {
        return NextResponse.json(
            { message: 'todo dont exist' },
            { status: 404 }
        )
    }

    return NextResponse.json({
        data: todo
    })
}

const putSchemaValidation = yup.object({
    description: yup.string().optional(),
    completed: yup.boolean().optional()
})

export async function PUT(request: Request, { params }: { params: Segments }) {

    try {
        const { uuid } = await params;

        const todo = await prisma.todo.findUnique({
            where: { id: uuid },
        });

        if (!todo) {
            return NextResponse.json(
                { message: 'todo dont exist' },
                { status: 404 }
            )
        }
        // yup validate is an async operation
        const { description, completed } = await putSchemaValidation.validate(await request.json());
        // prisma update is async operation
        const updatedTodo = await prisma.todo.update({
            where: { id: uuid },
            data: { description, completed }
        })

        return NextResponse.json({
            data: updatedTodo
        })
    } catch (e) {

    }
}
