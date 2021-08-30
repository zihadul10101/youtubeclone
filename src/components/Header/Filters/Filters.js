import React from 'react';
import './Filters.css';
const Filters = () => {
    return (
        // <!-- filters -->
        <div className="filters">
            <button className="filter-options active">all</button>
            <button className="filter-options">CSS</button>
            <button className="filter-options">web development</button>
            <button className="filter-options">python</button>
            <button className="filter-options">entertainment</button>
            <button className="filter-options">marvel</button>
            <button className="filter-options">javascript</button>
            <button className="filter-options">artificial intelligence</button>
            <button className="filter-options">machine learning</button>
            <button className="filter-options">trending</button>
        </div>
    );
};

export default Filters;