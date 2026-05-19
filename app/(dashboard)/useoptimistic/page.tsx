import type { Metadata } from "next";
import Link from "next/link";
import { OptimisticApp } from '@/applications/useoptmistic/OptimisticApp';
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
    title: "useOptimistic",
    description: "Example of useOptmistic React hook.",
};


const sleep = async (seconds: number = 1) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000
        )
    })
}

export const myObject: { isFetched: boolean } = { isFetched: false }
export const toggleHelper = async (isFetched: boolean) => {
    'use server'
    await sleep(3);
    revalidatePath('/useoptimistic');
    return myObject.isFetched = isFetched;
}


export default function UseOptimisticPage() {

    return (
        <>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                useOptimitic
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                This hook "updates" the user interface providing a perception of zero latency
                while a task is being processed in the background (<i>e.g.: when fetching data</i>).
                <br />
                In this pretty straight example, a <Link href="https://www.ibm.com/docs/en/app-connect/11.0.0?topic=functions-sleep-function" target="_blank">sleep function</Link>
                &nbsp;is used to simulate an API call with a 3-second delay in its response. Badge background color is inmediately changed
                after the <i>call server function</i> call, 3 seconds later text is changed.
                <br />
                You can check values passed/received in the <Link href="https://developer.mozilla.org/en-US/docs/Web/API/console/log_static" target="_blank">console.log</Link>.
            </p>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                What I've learn?
            </h2>
            <ul className="list-disc list-inside">
                <li><Link href="https://react.dev/reference/react/useOptimistic" target="_blank">useOptimistic</Link></li>
            </ul>
            <br />
            <p>Feel free to check the at GitHub <Link href="https://github.com/pataflafla-io/laboratory/tree/useOptimistic" target="_blank">repository</Link>.</p>
            <hr className="mt-8 mb-8" />

            <OptimisticApp init={myObject} toggle={toggleHelper} />

        </>
    );
}