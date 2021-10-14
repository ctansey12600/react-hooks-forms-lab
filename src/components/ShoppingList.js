import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItems}) {
  const [formData, setFormData] = useState({
    selectedCategory: "All",
    searchedCategory: ""
  })

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const itemsToDisplay = items.filter((item) => {
    if (formData.selectedCategory === "All") return true;

    return item.category === formData.selectedCategory;
  });

  const searchedReturn = itemsToDisplay.filter((item) => {
    if (formData.searchedCategory === "") return true
    let name = item.name.toLowerCase()
    return name.includes(formData.searchedCategory.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItems}/>
      <Filter onHandleChange={handleChange} onSearchChange={handleChange} search={formData.searchedCategory}/>
      <ul className="Items">
        {searchedReturn.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;