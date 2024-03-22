import { useState } from "react";
import handleClick from "./ListProducts"

export default function CardProduct({ product, quantityProduct }) {
    const productName = product.name;

    return (
        <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <img src={'http://ecommerce.api.pierre-jehan.com' + product.image.contentUrl} alt={productName}/>
                <h2>{productName}</h2>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={() => quantityProduct(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={(product.quantity === 0 && true)}>Ajouter au panier</button>
        </article>
    );
}