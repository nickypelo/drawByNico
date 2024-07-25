import type { Drawing } from "./interfaces";
export type DrawingPrice = Pick<Drawing, 'pic_size' | 'pic_people' | 'pic_shade'>;

export const pricePlan = ({pic_size, pic_shade, pic_people}:DrawingPrice):number =>{

    //pencil options
    //A5
    const pencil_a5_one:boolean = pic_size === "A5" && pic_people === "1" && pic_shade === "pencil";
    const pencil_a5_two:boolean = pic_size === "A5" && pic_people === "2" && pic_shade === "pencil";

    //A4
    const pencil_a4_one:boolean = pic_size === "A4" && pic_people === "1" && pic_shade === "pencil";
    const pencil_a4_two:boolean = pic_size === "A4" && pic_people === "2" && pic_shade === "pencil";
    const pencil_a4_three:boolean = pic_size === "A4" && pic_people === "3" && pic_shade === "pencil";

     //A3
     const pencil_a3_one:boolean = pic_size === "A3" && pic_people === "1" && pic_shade === "pencil";
     const pencil_a3_two:boolean = pic_size === "A3" && pic_people === "2" && pic_shade === "pencil";
     const pencil_a3_three:boolean = pic_size === "A3" && pic_people === "3" && pic_shade === "pencil";
 
     //A2
     const pencil_a2_one:boolean = pic_size === "A2" && pic_people === "1" && pic_shade === "pencil";
     const pencil_a2_two:boolean = pic_size === "A2" && pic_people === "2" && pic_shade === "pencil";
     const pencil_a2_three:boolean = pic_size === "A2" && pic_people === "3" && pic_shade === "pencil";
 

    // color options
    // A5
    const color_a5_one:boolean = pic_size === "A5" && pic_people === "1" && pic_shade === "color";
    const color_a5_two:boolean = pic_size === "A5" && pic_people === "2" && pic_shade === "color";

    //A4
    const color_a4_one:boolean = pic_size === "A4" && pic_people === "1" && pic_shade === "color";
    const color_a4_two:boolean = pic_size === "A4" && pic_people === "2" && pic_shade === "color";
    const color_a4_three:boolean = pic_size === "A4" && pic_people === "3" && pic_shade === "color";

    //A3
    const color_a3_one:boolean = pic_size === "A3" && pic_people === "1" && pic_shade === "color";
    const color_a3_two:boolean = pic_size === "A3" && pic_people === "2" && pic_shade === "color";
    const color_a3_three:boolean = pic_size === "A3" && pic_people === "3" && pic_shade === "color";

    //A2
    const color_a2_one:boolean = pic_size === "A2" && pic_people === "1" && pic_shade === "color";
    const color_a2_two:boolean = pic_size === "A2" && pic_people === "2" && pic_shade === "color";
    const color_a2_three:boolean = pic_size === "A2" && pic_people === "3" && pic_shade === "color";


    // pencil prices
    if(pencil_a5_one){return 250}
    if(pencil_a5_two){return 360}

    if(pencil_a4_one){return 390}
    if(pencil_a4_two){return 500}
    if(pencil_a4_three){return 630}

    if(pencil_a3_one){return 590}
    if(pencil_a3_two){return 760}
    if(pencil_a3_three){return 930}

    if(pencil_a2_one){return 960}
    if(pencil_a2_two){return 1250}
    if(pencil_a2_three){return 2100}


    // colors prices
    if(color_a5_one){return 360}
    if(color_a5_two){return 400}

    if(color_a4_one){return 450}
    if(color_a4_two){return 560}
    if(color_a4_three){return 750}

    if(color_a3_one){return 700}
    if(color_a3_two){return 920}
    if(color_a3_three){return 1250}

    if(color_a2_one){return 1800}
    if(color_a2_two){return 2360}
    if(color_a2_three){return 3400}

    return 0;

}

console.log(pricePlan({
    pic_size: "A5",
    pic_people: "1",
    pic_shade: "pencil"
}));