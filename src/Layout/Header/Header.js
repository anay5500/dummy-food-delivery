import {Fragment} from 'react';
import mainimage from './mainimage.jpg';
import './Header.css';
import Cartbutton from '../../Cart/Cartbutton/Cartbutton';

function Header(props) {
    return (
    <Fragment>
<header className='header'>
    <h1>Food app</h1>
    <Cartbutton onClick={props.onClick}/>
    
    
    </header>
   <div className='main-image'>
    <img src={mainimage} alt='foods'/>
   </div>
  
 </Fragment>
    )
}
export default Header;