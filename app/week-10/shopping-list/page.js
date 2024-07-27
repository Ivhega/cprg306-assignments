'use client';

import React, { useEffect, useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from '../_services/shopping-list-service';

export default function Page({ userId }) {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      if (userId) {
        const items = await getItems(userId);
        setItems(items);
      }
    };
    loadItems();
  }, [userId]);

  const handleAddItem = async (newItem) => {
    if (userId) {
      const itemId = await addItem(userId, newItem);
      setItems([...items, { id: itemId, ...newItem }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].replace(/[\p{Emoji_Presentation}\p{Emoji}\p{Extended_Pictographic}]/gu, '').trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <h1 className="text-2xl mt-5 mx-10">Shopping List</h1>
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
