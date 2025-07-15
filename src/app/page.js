export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <h1 className="text-4xl mb-4">Unified App Shell</h1>
      <p className="text-lg">Navigate to:</p>
      <div className="mt-6 space-x-4">
        <a href="/portfolio" className="text-cyan-500 underline">Portfolio</a>
        <a href="/todo" className="text-cyan-500 underline">Todo App</a>
      </div>
    </div>
  )
}
