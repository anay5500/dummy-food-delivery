import classes from './Checkout.module.css';
import { useRef } from 'react';

const Checkout = (props) => {

    const nameRef=useRef();
    const streetRef=useRef();
    const postalRef=useRef();
    const cityRef=useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredname=nameRef.current.value;
    const enteredstreet=streetRef.current.value;
    const enteredpostal=postalRef.current.value;
    const enteredcity=cityRef.current.value;

    props.onConfirm({
        name:enteredname,
        street:enteredstreet,
        postal:enteredpostal,
        city:enteredcity
      });
  };

  

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;