import React, {useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [formData, setFormData] = useState({
    topping: "",
    size: "Small",
    vegetarian: ""
  })

  function handleChange(event) {
    if(event.target.type === "radio") {
      const radioButtons = [event.target.parentElement.children[0], event.target.parentElement.children[2]];
      radioButtons.forEach((btn) => btn.removeAttribute("checked"));
      event.target.setAttribute("checked", true);
    }
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  return (
    <>
      <Header />
      <PizzaForm formData={formData} handleChange={handleChange} />
      <PizzaList setFormData={setFormData} />
    </>
  );
}

export default App;
