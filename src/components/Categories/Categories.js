import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';



const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>Select your Category</h4>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;