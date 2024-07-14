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
import { IoInformation } from 'react-icons/io5'
import { FiLogOut, FiLogIn } from 'react-icons/fi'

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
    <main className="relative h-screen flex items-center justify-center bg-gray-300">
      {/* Background img div */}
      <div className="bg-gradient-image absolute bottom-0 w-full h-1/2 bg-cover bg-center"></div>

      {/* Home container */}
      <div className="z-10 flex h-screen w-screen flex-col items-center">
        {/* Info bar */}
        <div className="info-bar flex items-center justify-between pl-4 pr-4 text-xl border-b border-black font-mono fixed left-0 top-0 w-full bg-gradient-to-b from-slate-300 pb-6 pt-6 backdrop-blur-2xl ">
          {user ? (
            <Link href="/user">{user.displayName}</Link>
          ) : (
            <h1>Athena</h1>
          )}
          {user ? (
            <button onClick={() => signOut(auth)}>
              <FiLogOut className="text-3xl" />
            </button>
          ) : (
            <button onClick={() => signInWithGoogle()}>
              <FiLogIn className="text-3xl" />
            </button>
          )}
        </div>

        {/* Home screen contents */}
        <div className="home-screen-contents flex flex-col items-center justify-around">
          {/* Athena App logo */}
          <div className="athena-app-logo flex justify-center items-center w-screen ">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-no-background.png"
              alt="Athena Logo"
              width={250}
              height={37}
              priority
            />
          </div>

          {/* Button container */}
          <div className="home-button-container flex gap-4 w-4/5">
            <Link
              href="/information"
              className="home-button shadow shadow-gray-300 border-white border border-solid rounded font-semibold h-full bg-white w-1/5 flex justify-center items-center"
            >
              <IoInformation className="text-xl text-white" />
            </Link>
            <Link
              href="/books"
              className="home-button shadow shadow-gray-300 rounded w-4/5 border-white border border-solid"
            >
              <h2 className="text-white text-xl w-full h-full font-mono flex justify-center items-center">
                Books
              </h2>
            </Link>
          </div>
        </div>

        {/* JL logo */}
        <div className="logo-footer-bar fixed bottom-0 left-0 flex w-full items-end justify-center">
          <Link
            className="flex place-items-center gap-2"
            href="https://www.jliuaana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/jl-high-resolution-logo-white-transparent.png"
              alt="jl logo"
              // className="dark:invert"
              width={60}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
