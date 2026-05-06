import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between px-16 sm:items-start">
        <section className="flex flex-col w-full">
          <div className="mx-auto text-center lg:ml-0 lg:text-left pt-8 lg:pt-16">
            <h1 className="max-w-2xl text-balance text-5xl font-medium md:text-6xl xl:text-7xl">Learn more 🤓</h1>
            <p className="mt-8 text-pretty text-lg">Space used to share/publish things that i've learned, or i'm currently learning;<br />mostly related to frontend stack and the JavaScript ecosystem.</p>
            <p className="text-pretty text-lg">Just for the record, this sort of laboratory was/is built using <Link href="https://www.nextjs.org/" target="_blank">NextJS</Link>
              &nbsp;framework<br />alongside <Link href="https://ui.shadcn.com/" target="_blank">Shadcn</Link>
              &nbsp;components as design system and <Link href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link>.</p>
            <p className="text-pretty text-lg">Also, the code is deployed at <Link href="https://www.github.com/" target="_blank">github</Link> and hosted/deployed to <Link href="https://www.vercel.com/" target="_blank">Vercel</Link>. </p>
            <br />
            <p className="text-pretty text-lg">You can reach me at </p>
          </div>
        </section>
      </main>
    </div>
  );
}
