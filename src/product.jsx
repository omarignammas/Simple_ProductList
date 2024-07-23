import Rating from "./rating";

export default function Product({product}){

return (
    <tr>
    <td>{product.id}</td>
    <td>{product.title}</td>
    <td className=" fw-bold">{product.price}$</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td><img className=" w-100 figure-img" src={product.image} alt={product.title}/></td>
    <td><Rating rate = {product.rating.rate}/></td>
  </tr>

)
  
}