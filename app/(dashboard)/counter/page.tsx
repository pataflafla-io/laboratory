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
            <h1 className="block text-4xl mb-3">
                Working with <Link href={'https://react.dev/reference/react/useState'} target='_blank'><s>useState</s></Link> <Link href="" target="_blank">Redux toolkit</Link>
            </h1>
            <p className="text-xl"><s>Basic useState example. The initoal value (20) was passed from the server but the component itself (<span className="italic">Counter application</span>) was created from the client side.</s></p>
            <p className="mt-3 text-xl">Basic Redux example. <s>The initial value (20) was passed from server</s> The initial value (100) was retrieved from an <Link href="/api/counter" target="_blank">endpoint</Link> (<Link href="https://nextjs.org/docs/app/getting-started/route-handlers" target="_blank">rest api</Link>); once retrieved, state is sets with that value in order to dispatch actions. Also, a check flag slice is used in order to keep the value when navigate thru the site.</p>
            <Counter initialValue={1} />
            <hr />
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-2xl">Note</h3>
                <span>Since <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href="https://nextjs.org/blog/next-13">NextJS 13</Link>, all components are <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://nextjs.org/blog/next-13#server-components'>Server Components</Link>.<br />You must specify <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://nextjs.org/docs/app/api-reference/directives/use-client'>'use client'</Link> in order to work with <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://react.dev/reference/react/hooks'>React hooks</Link>.</span>
            </div>
        </>
    );
}