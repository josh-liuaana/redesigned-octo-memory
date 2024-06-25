export interface BookData {
  name: string
  author: string
}

export interface Book extends BookData {
  id: string
}
