import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Learn more 🤓</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Space used to share/publish things that i've learned, or i'm currently learning; mostly related to frontend stack and the JavaScript ecosystem.
        It also helps me maintain and improve my english writing skills.
        <br />Just for the record, this sort of laboratory was/is built using <Link href="https://www.nextjs.org/" target="_blank">NextJS</Link>
        &nbsp;framework alongside <Link href="https://ui.shadcn.com/" target="_blank">Shadcn</Link>
        &nbsp;components as design system and <Link href="https://tailwindcss.com/" target="_blank">TailwindCSS</Link>.
        By the way, the code is hosted at <Link href="https://www.github.com/" target="_blank">github</Link> (private repo at the time i'm writing this)
        &nbsp;and deployed to <Link href="https://www.vercel.com/" target="_blank">Vercel</Link>. </p>
    </>
  )
}
