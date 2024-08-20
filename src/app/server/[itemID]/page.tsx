import ProductImage from "@/app/component/atom/productImg";
import ProductTitle from "@/app/component/atom/productTitle";
import { fetchData } from "@/app/utils/fetching";

export default async function ItemDetail ({params}:{params:{itemID:Number}}){
  const data=await fetchData(`https://dummyjson.com/products/${params.itemID}`)
  return ( 
    <div className="max-w-[500px] m-auto">
       <ProductTitle title={data.title} />
       <p>${data.price}</p>
      <ProductImage src={data.images[0]} alt={'error'}/>
    </div>
   );
}
 

//{ maxWidth: '100%', height: 'auto' }