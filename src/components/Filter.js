import React from "react";
const Filter = ({handleCategoryChange}) => {
    return (
        <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}
export default Filter;