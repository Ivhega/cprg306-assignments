import React from 'react';
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-2xl mt-5 mx-10">Shopping List</h1>
            <ItemList />
        </main>
    );
}
