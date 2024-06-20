import React from 'react';
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-2xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}
