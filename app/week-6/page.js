'use client';

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    // Assuming newItem is an object with properties: name, quantity, category
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-2xl mt-5 mx-10">Shopping List</h1>
      {/* Render NewItem component and pass handleAddItem as prop */}
      <NewItem onAddItem={handleAddItem} />
      {/* Render ItemList component and pass items as prop */}
      <ItemList items={items} />
    </main>
  );
}
