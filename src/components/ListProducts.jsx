import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

export default function ListProducts({products, quantityProduct}) {
    
    const productsList = products.map(product => (
        <CardProduct key={product.id} product={product} quantityProduct={quantityProduct}/>
    ));


    return (
        <section>
            <h1>Liste des articles</h1>
            {products.length === 0 && <p>Chargement en cours...</p>}
            <div className="grid grid-cols-4 gap-2">
                {productsList}
            </div>
        </section>
    )
}


