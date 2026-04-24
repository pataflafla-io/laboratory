import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <section className="flex flex-col w-full">
          <div className="mx-auto text-center lg:ml-0 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Learning stuff 😉</h1>
            <p className="mt-8 text-pretty text-lg">Space used to publish thing that i've learned, or i'm currently learning. Mostly JavaScript related.</p>
            <p className="text-pretty text-lg">Just for the record, the whole lab is built using <Link className="text-yellow-400 hover:underline" href='https://ui.shadcn.com/'>shadcn</Link> components.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
