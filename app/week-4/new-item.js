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

    let buttonStylesDecrement = "bg-blue-500 mr-2 w-10 rounded-2xl hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 1){
        buttonStylesDecrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed"
    };

    let buttonStylesIncrement = "bg-blue-500 mr-2 w-10 rounded-2xl hover:bg-blue-400 transition-colors active:bg-blue-300"
    if (quantity === 20){
        buttonStylesIncrement = "bg-gray-400 mr-2 w-10 rounded-2xl cursor-not-allowed"
    }

    return(
        <main>
            <div className="flex flex-row max-w-50 justify-center items-center">
                <div className ="flex-1 bg-white text-center justify-center">
                    <p className="text-black">{quantity}</p>
                </div>
                <div className ="flex-1 bg-white justify-center">
                    <button className={buttonStylesDecrement} onClick={decrement}>-</button>
                    <button className={buttonStylesIncrement} onClick={increment}>+</button>

                </div>
            </div>
        </main>
    )

}