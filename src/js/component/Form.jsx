import React, { useState } from 'react'
import Todolist from './TodoList.jsx'

function Form(props) {
  const [index,setIndex]=useState("");
  const handleChange = e =>{
    setIndex(e.target.value); 
  };
  const Submit = e => {
    e.preventDefault(); // para que no actulize la web

    props.onSubmit({ // props 
      id: Math.floor(Math.random()*10000),
      text:index
    })
    setIndex(""); // regresa el valor a string vacio " "

  }
  return ( // formulario 
    <form className='formulario' onSubmit={Submit}>
      <input 
      type="text" 
      placeholder='Agrega tu tarea' 
      value={index} 
      onChange={handleChange}
      name="text" 
      className='formulario-input'/>
      
      
    </form>
  )
}

export default Form