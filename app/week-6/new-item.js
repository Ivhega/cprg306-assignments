'use client';

import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = generateId();
    const newItem = { id, name, quantity, category };

    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="flex item-center justify-center text-red-300 bg-slate-800 border border-cyan-100 mx-10 m-10 p-5">
      <form onSubmit={handleSubmit}>
        <div className="block mb-4">
          <input className="block mt-1 p-1 w-full rounded-sm text-black bg-blue-100 focus:bg-white" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter item name" required/>
        </div>
        <div className="block mb-4">
          <input className="block mt-1 p-1 w-full rounded-sm text-black bg-blue-100 focus:bg-white" type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} min="1" max="99" required/>
        </div>
        <div className="block mb-4">
          <select className="block mt-1 p-1 w-full rounded-sm text-black bg-blue-100 focus:bg-white" value={category} onChange={(event) => setCategory(event.target.value)} required>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className="w-full py-2 px-4 rounded-sm bg-blue-600 hover:bg-blue-400 text-white" type="submit">Add Item</button>
      </form>
    </div>
  );
}
