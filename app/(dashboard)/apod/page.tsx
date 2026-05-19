import type { Metadata } from "next";
import { Apod } from "@/applications/apod/apodApp";
import Link from "next/link";

export const metadata: Metadata = {
    title: "apod app",
    description: "NASA - astronomy picture of the day.",
};

export default function ApodMainPage() {
    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance flex">
                <span>Working with</span>
                <ul className="flex ml-2">
                    <li className="after:font-normal after:ml-1 after:content-['/'] after:mr-1"><Link href='https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering' target='_blank'>SSR</Link></li>
                    <li className="after:font-normal after:ml-1 after:content-['/'] after:mr-1"><Link href='https://nextjs.org/docs/pages/guides/incremental-static-regeneration' target='_blank'>ISR</Link></li>
                    <li><Link href='https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation' target='_blank'>SSG</Link></li>
                </ul>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">What we've got here is a server fetch to <Link href='https://api.nasa.gov/' target='_blank'>NASA APOD API</Link> (<i>aka Astronomy Picture of the Day</i>)<br /> thru an <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' target='_blank'>async function</Link>, once the response then the data is passed to the client in order to interact with it.</p >
            <p className="leading-7 [&:not(:first-child)]:mt-6">An API KEY is mandatory in order to be able to hit the endpoint with expanded usage</p>
            <div className="flex flex-col items-start mt-5">
                <h3 className="text-xl">What I've learned:</h3>
                <ul className="list-disc list-inside">
                    <li>SSR + ISR + SSG strategies</li>
                    <li>Since NextJS 15, <Link href="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes" target="_blank">dynamic routing</Link> are asynchronous; so, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">await</Link> is needed in order to get <b>params</b> and <b>query params</b> (<Link href="https://nextjs.org/docs/messages/sync-dynamic-apis" target="_blank">more info</Link>).</li>
                    <li>Dynamic metadata, was used alongside dynamic routing in order to be SEO friendly (<Link href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata" target="_blank">more info</Link>).</li>
                    <li>Thanks to 'use cache' directive apod list and single apod are cached. It means, single apod are served from NextJs cache and not from Nasa response after it retrieved for the first time. Same for the apod list.</li>
                    <li>Shadcn <Link href="https://ui.shadcn.com/docs/components/radix/button#as-child" target="_blank">button asChild</Link> property allows to make a child component like a Button; this behavior is needed in order to work alognside NextJs's <Link href="https://nextjs.org/docs/app/api-reference/components/link" target="_blank">Link</Link> (<Link href="https://ui.shadcn.com/docs/components/radix/button#as-child" target="_blank">more info</Link>).</li>
                </ul>
            </div>
            <hr className="mt-5 mb-5" />
            <Apod />
        </>
    );
}