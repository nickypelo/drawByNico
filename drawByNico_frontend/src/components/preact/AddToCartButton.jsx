import { addToCart } from "../../store/cart_store";

export default function AddToCartButton ({pic_size, pic_shade, pic_people, pic_image, pic_price}){
    return (
        <div class="bg-stone-600 text-white font-bold p-2 w-fit">
            <button onClick={()=>addToCart({pic_size, pic_shade, pic_people, pic_image, pic_price})}>Add To Cart</button>
        </div>
    )
}