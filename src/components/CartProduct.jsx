import CartItemProduct from "./CartItemProduct";

export default function CartProduct({ products, productCartDelete,  quantityProduct}) {
    
    const filteredProduct = products.filter(product => product.quantityCart > 0);

    const productsCartList = filteredProduct.map(product => (
        <CartItemProduct key={product.id} product={product} productCartDelete={productCartDelete} quantityProduct={quantityProduct}/>
    ));

    const Total = filteredProduct.reduce((total, product) => total + (product.price * product.quantityCart), 0);
    
    return (
        <section>
            <h1>Votre Panier</h1>
            <div className="grid grid-cols-4 gap-2">
                {productsCartList}
            </div>
            <p>Total: {Total}</p>
        </section>
    );
}