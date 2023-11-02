import React, { useState } from "react";
import Card from "./Card";
import Formulario from "./components/Formulario";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [formData, setFormData] = useState(null);

  
  const handleSubmission = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Elige tu color favorito</h1>
      <Formulario handleSubmission={handleSubmission} />
      {formData && <Card data={formData} />}
    </div>
  );
}

export default App;



  
