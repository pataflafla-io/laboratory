import Link from "next/link";
import { Counter } from "./counterApp";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Counter app",
    description: "Cannonical example for useState.",
};

export default function CounterPage() {
    return (
        <>
            <h1 className="block text-4xl mb-3">
                Working with <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href={'https://react.dev/reference/react/useState'} target='_blank'>useState</Link>
            </h1>
            <p className="text-xl">Basic useState example. The inital value (20) was passed from the server but the component itself (<span className="italic">Counter application</span>) was created from the client side.</p>
            <Counter initialValue={20} />
            <hr />
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-2xl">Note</h3>
                <span>Since <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href="https://nextjs.org/blog/next-13">NextJS 13</Link>, all components are <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://nextjs.org/blog/next-13#server-components'>Server Components</Link>.<br />You must specify <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://nextjs.org/docs/app/api-reference/directives/use-client'>'use client'</Link> in order to work with <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://react.dev/reference/react/hooks'>React hooks</Link>.</span>
            </div>
        </>
    );
}