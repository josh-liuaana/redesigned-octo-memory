import { Book } from '@/models/types'

interface Props {
  book: Book
}

function BookTile(props: Props) {
  return (
    <div>
      <a href={`/books/${props.book.id}`}>
        <h1>{props.book.name}</h1>
        <i>{props.book.author}</i>
      </a>
    </div>
  )
}

export default BookTile
