
import { useEffect, useState } from 'preact/hooks';
import AddToCartButton from './AddToCartButton';
import { pricePlan } from '../../store/priceplan';

export default function UserOrder(){

    const [imageSrc, setImageSrc] = useState(null);
    const [pic_size, setPicSize] = useState("A5");
    const [pic_shade, setPicShade] = useState("pencil");
    const [pic_people, setPicPeople] = useState('1');
    const [pic_price, setPicPrice] = useState(0);
    const [show, setShow] = useState('block')


    //preview uploaded image
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImageSrc(e.target.result);
            setShow("hidden")
          };
          reader.readAsDataURL(file);
        }
      };

    //   input handlers
    const handlePictureSize = (event) =>{
        setPicSize(event.target.value);
        handlePicturePrice(pic_size, pic_people, pic_shade)

    }
    const handlePictureShade = (event) =>{
        setPicShade(event.target.value);
        handlePicturePrice(pic_size, pic_people, pic_shade)

    }
    const handlePicturePeople = (event) =>{
        setPicPeople(event.target.value);
        handlePicturePrice(pic_size, pic_people, pic_shade)
    }

    const handlePicturePrice = () =>{
        const totalPrice = pricePlan({
                pic_size: pic_size, 
                pic_shade: pic_shade,
                pic_people: pic_people
            });

        setPicPrice(totalPrice);
        
    }

    useEffect(()=>{
        handlePicturePrice();

    }, [pic_people, pic_shade, pic_size])
    return(
        <section class="max-w-[600px] p-6 mx-auto text-xs sm:text-base">
            <h3 class="py-3 mb-4 text-center w-fit mx-auto border-b border-stone-600 font-roboto font-semibold">Make your order using the guideline above:</h3>
            <div class="sm:w-1/2 h-[150px] flex justify-center items-center mb-4 mx-auto ">
            <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                required
                onChange={handleImageUpload}
                class={`mx-auto ${show} border p-4 rounded-lg border-stone-400`}
            />

            {imageSrc && (
                <div>
                    <img
                    id="imagePreview"
                    src={imageSrc}
                    alt="Image Preview"
                    style="height: 150px; border: 2px solid; padding: 5px"
                    />
                </div>
            )}
            </div>
            <div>
                {/* size options */}
                <div class="mb-4 flex justify-between items-center">
                    <label >Select size:</label>
                    <select 
                        onChange={handlePictureSize}
                        name="sizes" 
                        required
                        class="w-1/2 ml-2 p-2">
                            <option value="A5">A5</option>
                            <option value="A4">A4</option>
                            <option value="A3">A3</option>
                            <option value="A2">A2</option>
                    </select>
                </div>
                
                {/* pencil options */}
                <div class=" mb-4 flex justify-between items-center">
                    <label >Color or Regular:</label>
                    <select
                        onChange={handlePictureShade}
                        name="shade" 
                        required
                        id="" class="w-1/2 ml-2 p-2">
                            <option value="pencil">Pencil</option>
                            <option value="color">Color</option>
                    </select>
                </div>

                {/* number of people options */}
                <div class=" mb-4 flex justify-between items-center">
                    <label >Number of People:</label>
                    <select 
                        onChange={handlePicturePeople}
                        name="people" 
                        required
                        id="" class="w-1/2 ml-2 p-2">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div className="text-right flex justify-end">
            <div class="flex justify-between w-1/2 items-center">
                <div class="font-bold">R {pic_price}</div>
                <AddToCartButton 
                    pic_image={imageSrc}
                    pic_people={`${pic_people}`}
                    pic_shade={pic_shade}
                    pic_size={pic_size}
                    pic_price={pricePlan({
                        pic_size: pic_size,
                        pic_people: pic_people,
                        pic_shade: pic_shade
                    })}
                 />
            </div>
            </div>
        </section>
    )
}