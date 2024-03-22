import { useEffect, useState } from "react";
import './App.css'
import CartProduct from './components/CartProduct';
import ListProducts from './components/ListProducts'

function App() {
  const [products, setProducts] = useState([]);
  function quantityProduct(product){
    const newProducts = products.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1, quantityCart: item.quantityCart + 1 } : item
    );
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  }
  function productCartDelete(product){
    const newProducts =  products.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1, quantityCart: item.quantityCart - 1 } : item
    )
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  }
  // Exécutez une seule fois, après le premier rendu
  
  useEffect(() => {
    if(localStorage.getItem("products") === null){
      fetch('http://ecommerce.api.pierre-jehan.com/products')
        .then(response => response.json()) // Transforme la réponse en objet JavaScript
        .then(data => setProducts(data['hydra:member'].map(p => ({ ...p, quantityCart: 0 }))))
    }else{
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
       // Stocke les données dans le state
  }, []);
  

  return (
    <>
      <main className='md:container md:mx-auto'>
        <div className="flex gap-4">
          <div style={{ flex: 2 }}>
            <ListProducts products={products} quantityProduct={quantityProduct}/>
            <CartProduct products={products} productCartDelete={productCartDelete} quantityProduct={quantityProduct}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
