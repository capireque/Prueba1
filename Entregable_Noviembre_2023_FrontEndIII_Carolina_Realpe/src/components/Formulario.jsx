import React, { useState } from 'react';

const Formulario = ({ handleSubmission }) => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.trim() !== nombre) {
      alert('El campo "Nombre" debe tener al menos 3 caracteres y no debe contener espacios al comienzo.');
      return;
    }

    if (color.length < 6) {
      alert('El campo "Color" debe tener al menos 6 caracteres.');
      return;
    }

    handleSubmission({ nombre, color });

    setNombre('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        placeholder="Ingresar Nombre"
        id="nombre"
        value={nombre}
        onChange={handleNombreChange}
      />

      <label htmlFor="color">Color: </label>
      <input
        type="text"
        placeholder="Ingresar Color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />

      <input type="submit" value="Enviar datos" />
    </form>
  );
};

export default Formulario;

