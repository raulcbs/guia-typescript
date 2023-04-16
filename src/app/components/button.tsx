'use client'

import { useState } from "react";

const Button = () => {
  //* esto sirve para declarar el tipo del que sera los parametros del metodo
  const [number, setNumber] = useState<number | string>(5);

  const changeNumber = () => {
    setNumber(3);
  };

  return (
    <button
      onClick={changeNumber}
      className="bg-slate-500 border-2 border-slate-950 p-3 font-bold"
    >
      Change number: {number}
    </button>
  );
}

export default Button