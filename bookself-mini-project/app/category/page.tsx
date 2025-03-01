import Link from 'next/link';
import React from 'react'

export interface Category {
  id: string;
  name: string;
}

const CategoryPage = async () => {
  const getAllCategories = async (): Promise<Category[]> => {
    try {
      const response = await fetch('https://67c27f171851890165ac7cee.mockapi.io/api/temp/category')
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data: Category[] = await response.json()
      return data
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      return []
    }
  }
  
  const categories: Category[] = await getAllCategories()

  return (
    <div>
      <h1>Categories</h1>
      {categories.length > 0 ? (
        categories.map((category: Category) => (
          <Link key={category.id} href={`category/${category.id}`} >{category.name}</Link>
        ))
      ) : (
        <p>No categories found or error loading categories</p>
      )}
    </div>
  )
}

export default CategoryPage