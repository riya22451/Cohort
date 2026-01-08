const chai={
    name:"masala chai",
    price:20,
    isHot:true
}

let tea:{  // declaring the object type
    name:string;
    price:number;
    isHot:boolean
}
tea={
    name:"green tea",
    price:15,
    isHot:false
}


type Tea={
    name:string;
    price:number;
    ingredients:string[];
}
const myTea:Tea={  //agr bare minimum property hai ,extra bhi add krskte hai
    name:"herbal tea",
    price:25,
    ingredients:["tulsi","ginger","lemon"]
}

//jyada hai to koi issue nahi hai, km hoga to issue hoga

type Item={
    name:string,
    quantity:number
}
type Order={
    orderId:string,
    items:Item[]     // data splitting
} 

const updateItem=(updates:Partial<Item>)=>{ // Required keyword bhi hota h jisme sabhi properties ko mandatory kr skte hai
    //Partial makes all properties optional
    console.log(updates)
    // if we provide empty object also it will not give error
}