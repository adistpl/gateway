'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'

export default function Home() {
  const containerRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
  }, [])

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-12 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h1 className="text-5xl font-bold text-cyan-400 mb-6 text-center">
        👋 Hi, I’m Chinmaya — Full Stack SaaS Developer
      </h1>

      {/* About Section */}
      <p className="text-lg text-gray-300 leading-relaxed max-w-3xl text-center mb-10">
        I’m a passionate Full Stack Developer who builds scalable, production-grade SaaS applications using
        <strong className="text-white"> Next.js 14, Microfrontend Architecture, Event-Driven Systems</strong>, and modern CI/CD pipelines.
        I architect systems with clean multi-tenant logic, Redis/MongoDB optimization, and real-time message brokers like Kafka or RabbitMQ.
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        <button
          onClick={() => router.push('/portfolio')}
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-4 rounded-xl font-semibold text-white transition-all"
        >
          🧑‍💼 View My Portfolio
        </button>

        <button
          onClick={() => router.push('/note')}
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-4 rounded-xl font-semibold text-white transition-all"
        >
          📝 Note App (Home)
        </button>

        <button
          onClick={() => router.push('/note/todo')}
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-4 rounded-xl font-semibold text-white transition-all"
        >
          ✅ Note App – Todo List
        </button>

        <button
          onClick={() => router.push('/note/about')}
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-4 rounded-xl font-semibold text-white transition-all"
        >
          🙋 Note App – About Me
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500 text-center">
        Made with ❤️ by Chinmaya •{' '}
        <a
          href="https://github.com/chinmayakumardas"
          className="text-cyan-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="mailto:chinmaya@example.com"
          className="text-cyan-400 hover:underline"
        >
          Contact Me
        </a>
      </footer>
    </main>
  )
}
