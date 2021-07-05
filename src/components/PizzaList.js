import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import Pizza from "./Pizza";

function PizzaList({formData, setFormData}) {

  const [pizzaData, setPizzaData] = useState([]);
  // const [selectedPizza, setSelectedPizza] = useState({});
  let selectedPizza;


  useEffect(() => {
    const URL = "http://localhost:3000/pizzas";
    fetch(URL).then(resp => resp.json()).then(json => setPizzaData(json))
  }, []);

  function handleEditButtonClick(event) {
    const selectedPizzaObj = pizzaData.filter(pizzaObj => pizzaObj.id == event.target.id);
    selectedPizza = selectedPizzaObj;
    setFormData(...selectedPizza);
  }



  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaData.map(pizzaObj => <Pizza key={uuidv4()} pizzaObj={pizzaObj} handleEditButtonClick={handleEditButtonClick} />)
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
