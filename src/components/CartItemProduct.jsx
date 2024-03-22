export default function CartItemProduct({product, productCartDelete, quantityProduct}){
    const productName = product.name;

    
return(
    <article>
        <h1>{productName}</h1>
        <img src={'http://ecommerce.api.pierre-jehan.com' + product.image.contentUrl} alt={productName}/>
        <p>{product.price}</p>
        <p>{product.quantityCart}</p>
        <button onClick={() => quantityProduct(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={(product.quantity === 0 && true)}>Ajouter</button>
        <button onClick={() => productCartDelete(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Supprimer</button>
    </article>
    );
}