import { atom } from "nanostores";
import type { Drawing } from "./interfaces";

export const addToCart = ({pic_size, pic_shade, pic_people, pic_image, pic_price}:Drawing) =>{

  if(pic_image===null || pic_people===null || pic_shade===null || pic_size===null){
    return
  }

    const newDrawing: Drawing = {
        pic_size: pic_size,
        pic_shade: pic_shade,
        pic_people: pic_people,
        pic_image: pic_image,
        pic_price: pic_price
    };
    

    const drawingString = JSON.stringify(newDrawing);

    const items = getAllSessionStorageItems();

    item.set(Object.keys(items).length +1 );
    sessionStorage.setItem(`order ${item.get()}`, drawingString);    
}

// get all orders from session storage
export const getAllSessionStorageItems = (): Record<string, JSON> => {
    const items: Record<string, JSON> = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key?.includes("order")) {
        items[key] = JSON.parse(sessionStorage.getItem(key) || '');
      }
    }
    return items;
  };


export const item = atom(0);


