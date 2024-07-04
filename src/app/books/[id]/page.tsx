'use client'

// !
import data from '../../../../data.json'

import { useDebouncedCallback } from 'use-debounce'
import type { Character } from '@/models/types'

import { useEffect, useState } from 'react'
import { fetchThunkSingleBook } from '@/redux/features/currentBookSlice'
import { useAppSelector, AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import SingleCharacter from '@/app/characters/SingleCharacter'

function Book({ params }: { params: { id: string } }) {
  const id = params.id
  const book = useAppSelector((state) => state.currentBook)
  const dispatch = useDispatch<AppDispatch>()
  const [currentPage, setCurrentPage] = useState(0)
  const [currentCharacters, setCurrentCharacters] = useState([] as Character[])
  const [showIndiv, setShowIndiv] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState('')

  useEffect(() => {
    console.log('useEffect triggered')
    dispatch(fetchThunkSingleBook(id))
  }, [dispatch, id])

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page)
    getCurrentCharacterInfo()
  }

  const getCurrentCharacterInfo = useDebouncedCallback(() => {
    console.log('fetching new information up to page:', currentPage)
    const mentionedCharacters = [] as any
    data.characters.forEach((character) => {
      if (character.pageInfo[0].page <= currentPage) {
        mentionedCharacters.push(character)
      }
    })
    setCurrentCharacters(mentionedCharacters)
  }, 1000)

  const viewChar = (id: string) => {
    setSelectedCharacter(id)
    setShowIndiv(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      {book && (
        <div>
          <h1>{book.name}</h1>
          <p>{book.author}</p>
        </div>
      )}
      <div>
        <label htmlFor="page">Slider for Page: </label>
        <input
          className=" w-48"
          onChange={(e) => {
            updateCurrentPage(Number(e.target.value))
          }}
          type="range"
          id="page"
          name="page"
          min="1"
          max="400" // current page? or total number of pages?
          value={currentPage}
          step="1"
        />
        <p>{currentPage}</p>
      </div>

      {showIndiv ? (
        <div>
          <button onClick={() => setShowIndiv(false)}>
            Back to Character List
          </button>
          <SingleCharacter id={selectedCharacter} currentPage={currentPage} />
        </div>
      ) : (
        <>
          <p>Character list</p>
          {currentCharacters &&
            currentCharacters.map((char, idx) => (
              <div key={idx}>
                <button onClick={() => viewChar(char.id)}>
                  <h1>{char.name}</h1>
                </button>
              </div>
            ))}
        </>
      )}
    </main>
  )
}

export default Book
