//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";

function Card({ data }) {
  return (
    <div>
      <h2>Hola!</h2>
      <p><strong> </strong>{data.nombre}</p>
      <p><strong>Tu color favorito es: </strong>{data.color}</p>
    </div>
  );
}

export default Card;

