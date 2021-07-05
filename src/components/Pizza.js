import React from "react";

function Pizza({pizzaObj, handleEditButtonClick}) {

  return (
    <tr>
      <td>{pizzaObj.topping}</td>
      <td>{pizzaObj.size}</td>
      <td>{pizzaObj.vegetarian}</td>
      <td>
        <button type="button" id={pizzaObj.id} className="btn btn-primary" onClick={handleEditButtonClick}> 
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
