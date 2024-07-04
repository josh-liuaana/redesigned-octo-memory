export interface BookData {
  name: string
  author: string
  series: string
  pages: number
}

export interface Book extends BookData {
  id: string
}

export interface Character extends CharacterData {
  id: string
}

export interface CharacterData {
  name: string
  books: string[]
  pageInfo: Details[]
}

export interface Details {
  book: string
  page: number
  information: string
}
