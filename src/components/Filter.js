import React from "react";

function Filter({ onHandleChange, onSearchChange , search, selectedCategory }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} name="searchedCategory" value={search}/>
      <select name="filter" onChange={onHandleChange} value={selectedCategory} name="selectedCategory">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;