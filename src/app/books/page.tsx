'use client'
import { fetchThunkBooks } from '@/redux/features/bookSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { TbHomeFilled } from 'react-icons/tb'
import BookTile from './BookTile'

function Page() {
  const books = useAppSelector((state) => state.books)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchThunkBooks())
  }, [dispatch])

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 gap-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Library
        </h1>
      </div>
      <a href="/">
        <button className="text-4xl">
          <TbHomeFilled />
        </button>
      </a>
      <section className="grid-cols-2">
        {books && books.map((book) => <BookTile key={book.id} book={book} />)}
      </section>
    </main>
  )
}

export default Page
