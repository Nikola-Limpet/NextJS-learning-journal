import { notFound } from 'next/navigation';
import React from 'react'

const BookPage = async ({ params }: { params : { id : string}}) => {

  const { id } = await params;
  if (!id) {
    notFound();
  }

  const getBook = async () => { 
    try {
      const res = await fetch(`https://67c27f171851890165ac7cee.mockapi.io/api/temp/book/${id}`)
      if (!res.ok) {
        if (res.status === 404) {
          return null
        }
        throw new Error(`Error: ${res.status}`)
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch book:', error)
      return null
    }
  }

  const book = await getBook();
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book?.name}</h1>
      <div className="bg-blue-100 p-4 rounded-lg inline-block">
      </div>
      <div className="mt-8">
        <p className="text-gray-500">Sample items would be listed here...</p>
      </div>
    </div>
  )
}

export default BookPage