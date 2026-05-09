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
            <p className="mt-3 text-xl">Basic Redux example. <s>The initial value (20) was passed from server</s> The initial value (100) was retrieved from an <Link href="/api/counter" target="_blank">endpoint</Link> (<Link href="https://nextjs.org/docs/app/getting-started/route-handlers" target="_blank">rest api</Link>) from an <Link href="https://redux-toolkit.js.org/api/createAsyncThunk" target="_blank">asyncThunk</Link> function call; once retrieved, state is sets with that value.</p>
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-xl">What I've learned:</h3>
                <ul className="list-disc list-inside">
                    <li><Link href="https://redux-toolkit.js.org/" target="_blank">Redux toolkit</Link></li>
                    <li><Link href="https://nextjs.org/docs/app/getting-started/route-handlers" target="_blank">Route handlers</Link></li>
                </ul>
            </div>
            <hr className="mt-5 mb-5" />
            <Counter initialValue={1} />
        </>
    );
}