import  './Cart.css';
import Model from '../UI/Model';
import CartContext from '../Store/cart-context';
import { useContext,useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import React from 'react';


const Cart = (props) => {

const[ischeckout,setischechout]=useState(false);
const[isconfirmedorder,setisconfirmedorder]=useState(false);
const[isthankyou,setisthankyou]=useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderhandler= ()=>{
    setischechout(true);
    <Checkout/>
      }

  const confirmorderHAndler=(userdata)=>{
    fetch('https://react-foodorder-e53ab-default-rtdb.firebaseio.com/orders.json',{
      method:'POST',
      body:JSON.stringify({
        user:userdata,
        ordereditems:cartCtx.items
      })

    });
    setisconfirmedorder(true);
    setisthankyou(true);
  };


const cartItems = (
  
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartmodelcontent  =  <React.Fragment>
    
     {cartItems}
    <div className='total'>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {ischeckout && <Checkout onCancel={props.onClose} onConfirm={confirmorderHAndler}/>}
    {!ischeckout && <div className='actions'>
      <button className='button--alt' onClick={props.onClose}> Close</button>
   {hasItems && <button className='button2' onClick={orderhandler}>Order</button>}
   </div>}

  </React.Fragment>


 return (

     <Model onClose={props.onClose}>
    {!isconfirmedorder && cartmodelcontent}
    {isthankyou && <p>Thank you from buying from us</p>}
 </Model>
    
  );
};

export default Cart;