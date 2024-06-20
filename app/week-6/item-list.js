'use client';

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } 
    
    else if (sortBy === 'category') {
      let categoryA = a.category.toUpperCase();
      let categoryB = b.category.toUpperCase();
      if (categoryA < categoryB) {
        return -1;
      }
      if (categoryA > categoryB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <main>
      <div className="mt-4 mb-4">
        <button onClick={() => handleSort('name')} className={`px-4 py-2 mx-10 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Sort by Name</button>
        <button onClick={() => handleSort('category')} className={`px-4 py-2 mx-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Sort by Category</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </main>
  );
}
