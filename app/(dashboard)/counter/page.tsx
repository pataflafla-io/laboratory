'use cache';

import Link from "next/link";
import { Counter } from "./counterApp";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Counter app",
    description: "Cannonical example for useState.",
};

export default async function CounterPage() {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                Working with <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href={'https://react.dev/reference/react/useState'} target='_blank'>useState</Link>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">Basic useState example. The inital value (20) was passed from the server but the component itself (<span className="italic">Counter application</span>) was created from the client side.</p>
            <Counter initialValue={20} />
            <hr />
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-xl">What I've learned:</h3>
                <ul className="list-disc list-inside">
                    <li><Link href="https://redux-toolkit.js.org/" target="_blank">Redux toolkit</Link></li>
                    <li><Link href="https://nextjs.org/docs/app/getting-started/route-handlers" target="_blank">Route handlers</Link></li>
                    <li>Since <Link href="https://nextjs.org/blog/next-13">NextJS 13</Link>, all components are <Link href='https://nextjs.org/blog/next-13#server-components'>Server Components</Link>. <Link href='https://nextjs.org/docs/app/api-reference/directives/use-client'>'use client'</Link> is mandatory in order to work with <Link href='https://react.dev/reference/react/hooks'>React hooks</Link></li>
                </ul>
            </div >
            <hr className="mt-5 mb-5" />
            <Counter initialValue={1} />
        </>
    );
}