import { useStore } from "@nanostores/preact";
import { item, getAllSessionStorageItems } from "../../store/cart_store";
// import { useState, useEffect } from 'preact/hooks';

import cart from '../../images/cart.png';
import { useEffect, useState } from "preact/hooks";

export default function CartIcon(){

    let showCounter = "hidden";
    const [counter, setCounter] = useState(useStore(item));


    useEffect(()=>{
        const items = getAllSessionStorageItems();
        console.log(Object.keys(items).length);
        setCounter(Object.keys(items).length)

    }, [useStore(item)])

    if(counter > 0){
        showCounter = "flex";
    }

    return (
        <div class="relative">
            <a href="/cart">
                <img src={cart.src} width="28" alt="myCart" />
            </a>
            <div className={`w-4 h-4 rounded-full bg-black text-sm justify-center items-center absolute top-0 -right-3 text-white ${showCounter}`}>
                {counter}
            </div>
        </div>
    )
}