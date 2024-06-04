'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter item name" required/>
          </label>
        </div>
        <div>
          <label> Quantity:
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required/>
          </label>
        </div>
        <div>
          <label> Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
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
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
