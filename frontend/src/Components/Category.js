import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Category = ({module}) => {
    return(
        <div className="category">
            <div className="shadow px-2 mb-2 bg-danger rounded">
                {module}
            </div>
        </div>
    )
}

export default Category;