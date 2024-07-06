import { Book } from '@/models/types'
import Link from 'next/link'

interface Props {
  book: Book
}

function BookTile(props: Props) {
  return (
    <div>
      <Link href={`/books/${props.book.id}`}>
        <h1>{props.book.name}</h1>
        <i>{props.book.author}</i>
      </Link>
    </div>
  )
}

export default BookTile
