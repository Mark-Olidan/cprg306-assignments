"use client"

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if (quantity < 20){setQuantity(quantity + 1)}
    };

    const decrement = () => {
        if (quantity > 1){setQuantity(quantity - 1)}
    };

    let buttonStylesDecrement = "bg-blue-500 mr-2 w-10 rounded-2xl h-8 hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 1){
        buttonStylesDecrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed h-8"
    };

    let buttonStylesIncrement = "bg-blue-500 mr-2 w-10 rounded-2xl h-8 hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 20){
        buttonStylesIncrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed h-8"
    }

    return(
        <main>
                <div className ="flex flex-row flex-1 bg-white  justify-center items-center rounded max-w-50 h-10">
                    <p className="text-black mr-10">{quantity}</p>
                    <button className={buttonStylesDecrement} onClick={decrement}>-</button>
                    <button className={buttonStylesIncrement} onClick={increment}>+</button>

                </div>
        </main>
    )

}