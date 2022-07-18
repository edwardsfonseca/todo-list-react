import React, {useState} from 'react'
import Form from './Form.jsx'
function TodoList2({todos,completeTodo , removeTodo}) {
  
  return todos.map((todo,index) => ( // creamos las nuevas tarea
    <div className='coco'>
        <div className="container"
    
    key={index}>

    <div key={todo.id} onClick={() => completeTodo(todo.id)}> {todo.text} 
    
    
    
    
    
    </div>
    <div className='icons' onClick={() => removeTodo(todo.id)}><i class="fas fa-backspace"></i>
    
    </div>

    </div>
    </div>
  ))
}

export default TodoList2