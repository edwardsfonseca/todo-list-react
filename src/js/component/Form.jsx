import React, { useState } from 'react';
export default function Form() {
  const [index, setIndex] = useState(""); //crea
  const [tarea, setTarea] = useState([]); // guardar
  const [todoEditing, setTodoEditing] = useState(null); // editar texto
  const [editingtext, setEditingText]=useState(""); // recibe el nuevo texto
  
  
  const handleChange = (e) => {
    setIndex(e.target.value); // captura el cambio
  };

  const Submit = (e) => {
    e.preventDefault(); // no permite que se actualize la pagina
    addTodo(index); // llama a la funcion con la tarea nueva
    setIndex(""); // llama a la function
  };

  const addTodo = (todo) => { // funcion crear tarea
    const newTodos = [todo, ...tarea]; //tarea nueva + tarea antiguas ...
    setTarea(newTodos); // llamamos a la funcion con el nuevo valor newTodos nueva tarea
  };

  const removeTodo = (id) => { // funcion eliminar tarea
    // parametro i : indice
    const removeArr = [...tarea].filter((todo, index) => index !== id);
    setTarea(removeArr); // filtra todas las tareas antiguas si index que es valor que creas es desigual al i : indice
  };

 const editTodo= (id)=>{
  const updatedTodo = [...tarea].map((todo)=>{
    if(todo.id === id){
      todo.text = editingtext;
    }
    return todo;
  });
  setTarea(updatedTodo); // regresa la tarea editada
  setTodoEditing(null); // llama a la funcion con el valor null
  setEditingText(""); // llama a la funcion con " texto vacio"
 };
// Retorna todo -- 
  return (
    <>
      <form onSubmit={Submit} className="formulario">
        <h1>Agrega tu Tarea</h1>
        <input
          type="text"
          placeholder="Agrega tu tarea"
          value={index}
          onChange={handleChange}
          name="text"
          className="formulario-input"
        />
        {tarea.map((valor, x) => {
        return (
          <div className= "coco" key={x}>
            
            {todoEditing===x
            ?
            (<input 
            type="text" 
            onChange={(e)=> setEditingText(e.target.value) }
            value={editingtext}/>)
            :
            (<li>{valor}</li>)}
            <div className='icons' onClick={() => removeTodo(x)}><i className="fas fa-trash-alt"></i></div>
          <div className='icons' onClick={() => setTodoEditing(x)}><i className="fas fa-edit"></i></div>
          <div className='icons' onClick={() => editTodo(x)}><i className="fas fa-check-square"></i></div>
  
            
            
          </div>
        );
      })}
      
      <button className="contador"style={{"--clr":"#1e9bff"}} type="button" ><span><i></i>{tarea.length}</span></button>
      </form>

      
    </>
  );
}