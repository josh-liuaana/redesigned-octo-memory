'use client'

import Image from 'next/image'
import { auth } from '../../firebase.config'
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider()

    const result = await signInWithPopup(auth, provider)
    const user = result.user
    setUser(user)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {user ? (
          <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Link href="/user">{user.displayName}</Link>
          </h1>
        ) : (
          <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Athena - your one stop lore shop
          </h1>
        )}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.jliuaana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/jl-high-resolution-logo-transparent.png"
              alt="jl logo"
              className="dark:invert"
              width={65}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo-no-background.png"
          alt="Athena Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:gap-48 gap-8">
        <Link
          href="/books"
          className=" lg:text-center bg-gray-200 border-gray-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Books
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">Browse the library</p>
        </Link>

        {user ? (
          <button
            onClick={() => signOut(auth)}
            className=" lg:text-center bg-gray-200 border-gray-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Sign Out
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-50">See ya</p>
          </button>
        ) : (
          <button
            onClick={() => signInWithGoogle()}
            className=" lg:text-center bg-gray-200 border-gray-400 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Sign in
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-50">To add information</p>
          </button>
        )}
      </div>
    </main>
  )
}
