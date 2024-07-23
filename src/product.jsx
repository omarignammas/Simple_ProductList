import Rating from "./rating";

export default function Product({product}){

return (
    <tr>
    <td className="text-success fw-bolder">{product.id}</td>
    <td>{product.title}</td>
    <td className=" fw-bold mt-3">{product.price}$</td>
    <td>{product.description.slice(0,250)}</td>
    <td><span className="badge bg-dark text-white mt-3">{product.category}</span></td>
    <td><img className=" w-100 img-fluid figure-img" src={product.image} alt={product.title}/></td>
    <td><Rating rate = {product.rating.rate}/></td>
  </tr>

)
  
}