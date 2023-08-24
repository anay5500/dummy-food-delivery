import ReactDOM from 'react-dom';
import {Fragment} from 'react';
import './Model.css';

function Backdrop(props){
    return(
        <div className='backdrop' onClick={props.onClose}>
           
        </div>
    );
};

function ModelOverlay(props){
    return(
        <div className='modal'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
};


function Model(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,document.getElementById('overlays'))}
        </Fragment>
    );
};
export default Model;