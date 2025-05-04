import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
export default function Cart({cartItems,add,remove}) {
  const totalPrice = cartItems.reduce(
    (sum,product) => sum + product.price*product.number,0
  )
  const buy = ()=>{
    alert("Дякую за замовлення")
  }
  return (
    <Alert variant="primary">
      <Alert.Heading>Корзина</Alert.Heading>
    
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
     {cartItems.length === 0 && <p>Порожня корзина</p>}
     <table width="100%">
      <tr>
        <td width="25%">Назва</td>
        <td width="25%">Кількість</td>
        <td width="25%">Ціна</td>
        <td width="25%">Сума</td>
     </tr>
      {cartItems.map(product=>
        <tr key={product.id}>
        <td width="25%">{product.name}</td>
        <td width="25%"><Button onClick={()=>remove(product)} variant="warning">-</Button>
        {product.number}<Button onClick={()=>add(product)}variant="warning">+</Button></td>
        <td width="25%">{product.price}$</td>
        <td width="25%">{product.price*product.number}$</td>
      </tr>
      )}
     </table>
      <hr />
      <p className="mb-0">
        Сума до сплати {totalPrice}
      </p>
      {cartItems.length > 0 &&<Button onClick={buy} variant="danger">Ваше замовлення прийнято</Button>}  
    </Alert>
  )
}
