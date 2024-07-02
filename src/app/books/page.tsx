'use client'
import { fetchBooks } from '@/apis/books'
import { useState, useEffect } from 'react'
import type { Book } from '@/models/types'

function Page() {
  const [bookList, setBookList] = useState<Book[]>([])

  useEffect(() => {
    const getBooks = async () => {
      const books = await fetchBooks()
      setBookList(books)
    }
    getBooks()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <a href="/">
        <button className="border-black border-solid border-2 rounded-md px-4 py-2 hover:bg-slate-400">
          Home
        </button>
      </a>
      <h1 className="text-3xl">Library</h1>
      {bookList &&
        bookList.map((book, i) => (
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
