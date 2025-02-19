import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe=useLoaderData();
    console.log(shoe);
    const {name,price,ratings,seller,img,stock,category}=shoe;
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center font-bold">{name}</h1>
  
        <img className="h-[600px]" src={img} alt="product image" />
  
        <h3 className="text-2xl font-semibold"><span className="text-red-500">Price: {price} $$</span></h3>
        <h3 className="text-xl font-semibold">Seller: {seller}</h3>
        <h3 className="text-xl font-semibold">Category: {category}</h3>
        <p className="text-lg font-light">Stoke: {stock}</p>
        <p className="text-lg font-light">Rating: {ratings}</p>
      </div>
    );
};

export default ProductDetails;