import { getAllSessionStorageItems } from "../../store/cart_store";
import { useEffect, useState } from "preact/hooks";
import { loadStripe } from '@stripe/stripe-js';

export default function CheckOut(){
    const [sessionItems, setSessionItems] = useState(null);
    const [cartSize, setCartSize] = useState(0);

    const [quantity, setQuantity] = useState(3);
    const [totalPrice, setTotaPrice] = useState(1400);
    const stripePromise = loadStripe('pk_test_51PeoqB2MvK0fDw6SKWVBvm7U2M4cDV25mjt0auHkNAzwF0JwBcQ6s6J5wePXtV1fVYKpim8FK0LrleTZN7L5qz6k00TKFfBD4i');

    const handleSubmit = async () => {

        const jsonData = {
            quantity: quantity,
            totalPrice: totalPrice,
          };

          const response = await fetch('http://localhost:7070/create-checkout-session', {  // Enter your IP address here
            method: 'POST', 
            mode: 'cors', 
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      
          })
          if (response.ok) {
            const { sessionId } = await response.json();
            const stripe = await stripePromise;
            stripe.redirectToCheckout({ sessionId }).then((result) => {
                if (result.error) {
                    console.error(result.error.message);
                }
            });
        } else {
            console.error('Failed to create checkout session');
        }

          console.log("done did it")
      };


    useEffect(()=>{
        const items = getAllSessionStorageItems();
        setSessionItems(items);
        setCartSize(Object.keys(items).length);
        setQuantity(Object.keys(items).length);
        setTotaPrice()
    },[]);

    return(
        <section>
            {cartSize > 0 ?
            <div class="md:w-5/6 text-sm sm:text-base mx-auto">
                {Object.entries(sessionItems).map(([key, value]) =>(
                    <div class="grid grid-cols-2 p-4 my-8 border-2 shadow-lg shadow-stone-400"  key={key}>
                        <div class="w-32 mx-auto h-32 sm:h-auto rounded-full sm:rounded-none ">
                            <img 
                                src={value["pic_image"]}
                                alt="photo to upload"
                                class="w-28 h-28 rounded-full sm:rounded-none sm:h-auto border-stone-400 border-4"
                                />
                        </div>
                        <div class="font-semibold text-stone-500">
                            <p class="mb-2">{value["pic_size"]} {value["pic_shade"]} drawing of {value["pic_people"]} {value["pic_people"] === "1" ? "person" : "people"}.
                            </p>  
                            <p>Total: R {value["pic_price"]}</p>
                                        
                        </div>
                    </div>
                ))}
                <div class="text-right my-6">
                    <button class="px-4 py-2 text-white bg-green-600 font-semibold" onClick={handleSubmit}>Proceed to Checkout</button>
                </div>
            </div>
            :
            <div class="text-center my-6 ">
                <p>Your Cart is empty!</p>
                <p class="mt-4">
                    <a href="/order" class="px-4 py-2 font-bold bg-stone-500 text-white">Order now</a>
                </p>
            </div>
            }
             
        </section>
    )
}
