import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Button = () => {
    return(
    <div>
        <button type="button" className="btn btn-success">
        <Link to="/ask" style={{ textDecoration: 'none',color: 'black'}}>Ask a question</Link> 
        </button>
    </div>
    )
}




export default Button;