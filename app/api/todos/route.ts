import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '0');
    if (isNaN(take)) {
        return NextResponse.json(
            { message: 'take parameter must be a number' },
            { status: 400 }
        )
    }

    if (isNaN(skip)) {
        return NextResponse.json(
            { message: 'skip parameter must be a number' },
            { status: 400 }
        )
    }

    const todos = await prisma.todo.findMany({
        take,
        skip
    })
    console.log('todos', todos)
    return NextResponse.json({
        data: todos
    })
}

// Validation Schema: this validation will fail if:
// 1) a property not defined in the object is added
// 2) required property is not included in the body
const postSchemaValidation = yup.object({
    description: yup.string().required(),
    completed: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {

    try {
        // yup validate is an async operation
        const body = await postSchemaValidation.validate(await request.json());
        // prisma create is an async operation
        const createTodo = await prisma.todo.create({ data: body })

        return NextResponse.json(createTodo)
    } catch (e) {
        return NextResponse.json({ e }, { status: 400 })
    }
}

export async function DELETE(request: Request) {

    try {

        const todoDeleted = await prisma.todo.deleteMany({
            where: { completed: true },
        });

        return NextResponse.json({
            data: todoDeleted
        })
    } catch (e) {

    }
}