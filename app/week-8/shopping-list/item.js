  
  export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div
        className="text-red-300 bg-slate-800 border border-cyan-100 mx-10 m-10 p-5 cursor-pointer"
        onClick={() => onSelect({ name, quantity, category })}
      >
        <h3 className="text-lg">{name}</h3>
        <p>Buy {quantity} in {category}</p>
      </div>
    );
  }
  