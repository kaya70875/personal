import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 mt-24">
      <section className="hero flex flex-col gap-8 items-center text-center">
        <h1 className="max-w-2xl">Hi, I am <span className="text-accent">Ahmet. </span>I build things for the web.</h1>
        <h3 className="max-w-3xl 2xl:max-w-4xl">I turn ideas into code and write about my journey as a developer. Let’s build something cool!</h3>
        <div className="flex items-center gap-16 justify-center w-full">
          <Button>View My Work</Button>
          <Button variant="secondary">See My Blog</Button>
        </div>
      </section>
    </main>
  )
}
