import Link from "next/link";

interface Book {
  id: string;
  name: string;
}
const BookPage = async () => {
  const getAllBooks = async () : Promise<Book[]> => {
    try {
      const response = await fetch('https://67c27f171851890165ac7cee.mockapi.io/api/temp/book')
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      return data
    }
    catch (error) {
      console.error('Failed to fetch books:', error)
      return []
    }
  }


  const books: Book[] = await getAllBooks()

  return (
    <div>
      <h1>Books</h1>
      {books.length > 0 ? (
        books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>{book.name}</Link>
        ))
      ) : (
        <p>No books found or error loading books</p>
      )}
    </div>
  )
}

export default BookPage;