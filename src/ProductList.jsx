import { useEffect, useState } from "react"
import Product from "./product"
import { type } from "@testing-library/user-event/dist/type"

export default function ProductList(){

  const [products,setproducts] = useState([])
  const [searchInput,SetSearchInput] = useState('')
  const [categories,SetCategories] = useState([])
  const [searchCategory,SetSearchCategory] = useState('')



  const getproducts = () => {
       fetch('https://fakestoreapi.com/products')
       .then(Response => Response.json())
       .then(Response => setproducts(Response))
  }
  const getcategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(Response => Response.json())
    .then(Response => SetCategories(Response))
}
  useEffect(()=> {
    getproducts()
    getcategories()
  },[])

  const displaycategories = () => { 
      return categories.map(category => 
         <button  type="submit"  id="category" value={category} onClick={handleCategory} className="btn btn-primary">{category}</button>
      )
  }
  const displayproducts = () => {
    console.log(searchCategory)
    console.log(type(searchCategory))
    const productfind = products.filter(product => {
      return product.title.includes(searchInput) || product.id.toString().includes(searchInput)
      || product.description.includes(searchInput) || product.category.includes(searchCategory)
    })

    if(productfind.length > 0 ){ 
      return productfind.map((product,key) => {
        return (<Product product={product} key={key}/>)
      })
    }
    return  <tr className="colSpan={7}">
                <td>No Items</td>
            </tr>
  
  }
  const handleSearch = (e) => {
     e.preventDefault()
     const searchValue = document.querySelector('#search').value;
     SetSearchInput(searchValue)
  }
  const handleCategory = (e) => {
    e.preventDefault()
    const categoryValue = e.target.value;
    SetSearchCategory(categoryValue)
 }
  return (
    <div className="container-fluix mx-auto w-75 my-3">
      <form>
        <div className=" row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Search</label>
          </div>
          <div className="col-auto">
            <input type="text" id="search" className="form-control"/>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <hr/>
        <div className="row g-3 align-items-center">
           <div className="btn-group">
              {displaycategories()}
           </div>
         </div>
       </form>
       <hr/>
          <h1>Products :</h1>
          <table className="table">
    <thead>
        <tr className="text-center text-primary">
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