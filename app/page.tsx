import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <section className="flex flex-col w-full">
          <div className="mx-auto text-center lg:ml-0 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Learn more 🤓</h1>
            <p className="mt-8 text-pretty text-lg">Space used to share/publish things that i've learned, or i'm currently learning;<br />mostly related to frontend stack and the JavaScript ecosystem.</p>
            <p className="text-pretty text-lg">Just for the record, the whole lab is built with <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href="https://www.nextjs.org/" target="_blank">NextJS</Link> framework using <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href="https://ui.shadcn.com/" target="_blank">Shadcn</Link><br />components as design system and <Link className="text-cyan-800 dark:text-cyan-400 hover:underline" href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link>.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
