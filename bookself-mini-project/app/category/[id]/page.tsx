import React from 'react'
import { notFound } from 'next/navigation';
import { Category } from '../page';

type CategoryParams = {
  id: string;
}

const CategoryIdPage = async ({ params }: { params: CategoryParams }) => {

  const { id } = await params;
  if (!id) {
    notFound();
  }

  const getCategory = async () : Promise<Category | null> => {
    try {
      const res = await fetch(`https://67c27f171851890165ac7cee.mockapi.io/api/temp/category/${id}`)
      if (!res.ok) {
        if (res.status === 404) {
          return null
        }
        throw new Error(`Error: ${res.status}`)
      }
      const data = await res.json();
      return data;
      
    } catch (error) {
      console.error('Failed to fetch category:', error)
      return null
    }
  }
 
  const category = await getCategory();
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">{category?.name}</h1>
    <div className="bg-blue-100 p-4 rounded-lg inline-block">
    </div>
    <div className="mt-8">
      <p className="text-gray-500">Sample items would be listed here...</p>
    </div>
  </div>
  )
}

export default CategoryIdPage;