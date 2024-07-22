export default function Product({product}){

return (
    <tr>
    <td>{product.id}</td>
    <td>{product.title}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td>{product.image}</td>
    <td>{product.rating}</td>
  </tr>

)
  
}