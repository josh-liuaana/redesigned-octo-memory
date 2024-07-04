'use client'

import data from '../../../data.json'

import { useEffect, useState } from 'react'
import type { Character, Details } from '@/models/types'

function SingleCharacter({ id, currentPage }: any) {
  const [char, setChar] = useState({} as Character)
  const [updatedCharInfo, setUpdatedCharInfo] = useState<Details[]>([])

  useEffect(() => {
    const character = data.characters.filter((char) => char.id === id)
    setChar(character[0])
  }, [id])

  const spoilerFreeInformation = () => {
    const restrictedCharacterInfo = char.pageInfo.filter(
      (information) => information.page <= currentPage
    )
    console.log('char info:', restrictedCharacterInfo)
    setUpdatedCharInfo(restrictedCharacterInfo)
  }

  return (
    <main className="border-solid border-black border-2 rounded-md p-4">
      <p>Single Charchar</p>
      <h1>{char && char.name}</h1>
      <button onClick={spoilerFreeInformation}>
        Show spoiler free char info
      </button>
      {updatedCharInfo &&
        updatedCharInfo.map((char, idx) => (
          <div key={idx}>
            <p>{char.information}</p>
          </div>
        ))}
    </main>
  )
}

export default SingleCharacter
