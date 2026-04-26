import Link from "next/link";

import type { Metadata } from "next";
import { Apod } from "@/applications/apod/apodApp";

export const metadata: Metadata = {
    title: "Counter app",
    description: "Cannonical example for useState.",
};

export default function CounterPage() {
    return (
        <>
            <h1 className="block text-4xl mb-3">
                <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering' target='_blank'>Server Side Rendering</Link>
            </h1>
            <p className="text-xl">What we've got here is a fetch to <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://api.nasa.gov/' target='_blank'>NASA APOD API</Link> (<i>aka A Picture of the Day</i>)</p>
            <p>Data fetching is triggered from the server thru an <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' target='_blank'>async function</Link>, once the response then the data is passed to the client in order to interact with it.</p>

            <Apod />
            <hr />
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-2xl">Note</h3>
                <span>An API KEY is mandatory in order to be able to hit the endpoint with expanded usage</span>
            </div>
        </>
    );
}