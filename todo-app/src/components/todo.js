import {React,useState } from 'react';
import TodoList from './TodoList';
import './todo.css';
function TodoApp(){

    const [inputList,setInputList] =useState("");
    const [ items,setItems]=useState([]);
    const itemEvent=(event)=>{
        
        setInputList(event.target.value);
    }

    const listofItems=()=>{
       
        if(inputList===""){
            alert("add items");
        }
        else{
            setItems((oldItems)=>{
                return[...oldItems,inputList ]
            })
            setInputList("")
        }
       

    }
    const deleteItems=(id)=>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return index!==id;

            })
        })
    }
    return<div id="main">
        <div id="todoapp">
            <h1>
                Todo App 
            </h1>
            <br/>
            <input type="text" 
            placeholder="Add Items" 
            value={inputList} 
            onChange={itemEvent}
            classname="inputbox"
            required="required"
            ></input>
                 <button onClick={listofItems} id="plus">+</button>

            <ul>
            
                {
                    items.map((item,index)=>{
                   return  <TodoList 
                   key={index} 
                   id={index} 
                   text={item}
                   onSelect={deleteItems}
                   />
                    })
                }
            </ul>
            </div>
    </div>
}
export default TodoApp;