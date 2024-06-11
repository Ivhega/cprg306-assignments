'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex item-center justify-center text-red-300 bg-slate-800 border border-cyan-100 mx-10 m-10 p-5">
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter item name" required/>
        </div>
        <div>
            <input type="number" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} min="1" max="99" required/>
        </div>
        <div>
            <select value={category} onChange={(event) => setCategory(event.target.value)} required>
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
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
