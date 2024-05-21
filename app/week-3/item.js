

export default function Item({item}){

    let {name, quantity, category} = item;

    return(
        <div className="text-red-300 bg-slate-800 border border-cyan-100 mx-10 m-10 p-5">
            <h3 className="text-lg">Name: {name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}