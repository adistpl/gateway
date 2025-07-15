export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl mb-6">🚀 Microfrontend Gateway</h1>
      <a href="/portfolio" className="text-cyan-400 underline mb-4">→ Portfolio App</a>
      <a href="/note" className="text-cyan-400 underline">→ Note App</a>
      <a href="/about" className="text-cyan-400 underline">→ Note App</a>
    </main>
  )
}
