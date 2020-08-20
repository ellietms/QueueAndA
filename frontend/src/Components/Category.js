import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Category = ({category}) => {
    return(
        <div className="category">
            <div className="shadow px-2 mb-2 bg-danger rounded">
                {category}
            </div>
        </div>
    )
}

export default Category;