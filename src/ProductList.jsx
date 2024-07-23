import { useEffect, useState } from "react"
import Product from "./product"

export default function ProductList(){

  const [products,setproducts] = useState([])
  const getproducts = () => {
       fetch('https://fakestoreapi.com/products')
       .then(Response => Response.json())
       .then(Response => setproducts(Response))


  }
  useEffect(()=> {
    getproducts()
  },[])

  const displayproducts =() => {
    
    return products.map((product,key) => {
      return (<Product product={product} key={key}/>)
    
    })
}
  return (
    <div className="container-fluix mx-auto w-75 my-3">
          <h1>Liste des produits :</h1>
          <table className="table">
    <thead>
        <tr className="text-center">
            <th>#ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
        </tr>
    </thead>
    <tbody>
           {displayproducts()}
    </tbody>
 </table>
    </div>

  )
}