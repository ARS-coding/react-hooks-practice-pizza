import React, {useEffect, useState} from "react";

function PizzaForm({formData, handleChange}) {

  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll("input"));
    let toppingInput = inputs[0];
    let vegan = inputs[1];
    let notVegan = inputs[2];
    let radioButtons = [vegan, notVegan];
    if (formData.vegetarian === true) {
      radioButtons.forEach(radioBtn => radioBtn.removeAttribute("checked"));
      notVegan.setAttribute("checked", true);
    }
    else if (formData.vegetarian === false) {
      radioButtons.forEach(radioBtn => radioBtn.removeAttribute("checked"));
      vegan.setAttribute("checked", true);
    }
    // else if (formData.vegetarian === "") {
    // radioButtons.forEach(radioBtn => radioBtn.removeAttribute("checked"));
    // }
  }, [formData])

  function handleSubmit(event) {
    event.preventDefault();
    let submitBtn = document.getElementById("submitBtn");
    const URL = `http://localhost:3000/pizzas/${formData.id}`;
    // const configurationObj = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // };
    // fetch(URL, configurationObj).then(resp => resp.json()).then(json => console.log(json))
    const configurationObj1 = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    fetch(URL, configurationObj1).then(resp => resp.json()).then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleChange}
            value={formData.topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={formData.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleChange}
              id="vegan"
            />
            <label className="form-check-label">Vegetarian</label>
            <input
              className="form-check-input block"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleChange}
              id="notVegan"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button id="submitBtn" type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
