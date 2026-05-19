import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import { TaskApp, TaskStatus } from "@/applications/todoWithRestApi/taskApp";
import { Suspense } from "react";
import * as api from '@/applications/todoWithRestApi/api/todo'
import Link from "next/link";

export const metadata: Metadata = {
    title: "Todo App",
    description: "Todo task application using routes api, Prisma and Postgres.",
};

export default async function TaskPage() {

    const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
    const newTodos = todos.map(todo => ({
        id: todo.id,
        title: todo.description,
        status: todo.completed ? 'completed' as TaskStatus : 'pending' as TaskStatus
    }))
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                Todo Application with Rest API
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                CRUD application using <Link href="https://www.prisma.io/" target="_blank">Prisma</Link> <Link href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping" target="_blank">ORM</Link> with Postgres. The workflow from frontend
                to backend was by calling a <Link href="https://www.ibm.com/think/topics/rest-apis" target="_blank">rest api</Link>. <Link href="https://restfulapi.net/http-methods/" target="_blank">Verbs</Link> exposed are the responsable
                to create/read/update/delete the database records thru <Link href="https://www.prisma.io/" target="_blank">Prisma</Link>.
            </p>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                What I've learn?
            </h2>
            <ul className="list-disc list-inside">
                <li><Link href="https://nextjs.org/docs/app/getting-started/route-handlers" target="_blank">Routes handling</Link></li>
                <li>Basic Docker configuration</li>
                <li><Link href="https://www.prisma.io/" target="_blank">Prisma</Link> ORM</li>
                <li><Link href="https://tanstack.com/table/latest" target="_blank">TanStack Table</Link></li>
                <li>Vercel configuration in order to work with Postgres</li>
            </ul>
            <hr className="mt-8 mb-8" />
            <Suspense fallback='<>Loading</>'>
                <TaskApp todos={newTodos} />
            </Suspense>
            <hr />
        </>
    );
}