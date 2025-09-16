

export default function Item({item}){

    let {name, quantity, category} = item;

    return(
        <main>
            <div className="bg-blue-600 pt-3 pb-3 pl-2 m-3 w-1/5 mx-auto hover:bg-emerald-500">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p>Buy {quantity} in {category}</p>
            </div>
        </main>
    )
}