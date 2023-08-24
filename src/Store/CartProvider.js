import { useReducer } from "react"
import Cartcontext from "./cart-context"

const defaultState = {
    items: [],
    totalAmount: 0
  };

  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
    return defaultState;
  };

  
function CartProvider(props){

    const [state,dispatch]=useReducer(cartReducer,defaultState);
   
        function additemtocarthandler()
        {
            dispatch({type:'ADD',item:state.items});
        }
       function removeitemfroncarthandler()
        {

        }

        const cartcontext={
        item: state.items,
        totalamount: state.totalAmount,
        addItem: additemtocarthandler,
    
        
        removeItem: removeitemfroncarthandler
        
        
    }
    return (
        <Cartcontext.Provider value={cartcontext}>
            {props.children}
        </Cartcontext.Provider>
    )

}
export default CartProvider