import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany()
    const todo = await prisma.todo.createMany({
        data: [
            {
                description: 'Configure: Postgres(docker)'
            },
            {
                description: 'Configure: Prisna'
            },
            { description: 'Configure: Prisma + NextJS' }
        ]
    })

    return NextResponse.json({
        message: 'seed executed'
    })
}