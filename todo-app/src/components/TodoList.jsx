import React from 'react';
import './todo.css';  
const TodoList=(props)=>{
    return ( <div id="listitem">
        <span><button  onClick={
            ()=>{
                props.onSelect(props.id) 
            }

           }
           id="cross"
           >
                X</button>
            
            
            </span><li>{props.text}</li>
        
        </div>
        
        )
          
}
export default TodoList;