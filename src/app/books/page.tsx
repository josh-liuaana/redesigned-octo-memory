'use client'
import { fetchThunkBooks } from '@/redux/features/bookSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'

function Page() {
  const books = useAppSelector((state) => state.books)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchThunkBooks())
  }, [dispatch])

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <a href="/">
        <button className="border-black border-solid border-2 rounded-md px-4 py-2 hover:bg-slate-400">
          Home
        </button>
      </a>
      <h1 className="text-3xl">Library</h1>
      {books &&
        books.map((book, i) => (
          <div key={i}>
            <a href={`/books/${book.id}`}>
              <h1>
                {book.name} - {book.author}
              </h1>
            </a>
          </div>
        ))}
    </main>
  )
}

export default Page
