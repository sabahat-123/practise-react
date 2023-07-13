import { useState } from 'react';
import './App.css';
export default function ToDo(){
    const[add , setAdd] = useState("");
    const[list , setList] = useState([]);

    const addItem =(e)=>{
        e.preventDefault();
        if(add !== ''){
        setList([...list,add]);
        setAdd('');
        console.log(list);
        }
        
    }
    const deleteItem=(index)=>{
        const newList = [...list];
        newList.splice(index,1);
        setList([...newList]);
    }
   
    return(
        <>
        <div className="to-do-container">
        <h1>To-Do List</h1>
        <input 
        type="text" 
        id="taskInput" 
        placeholder="Add new task..."
        value={add}
        onChange={e=>setAdd(e.target.value)}
        />
        <button id="addButton" onClick={addItem}>Add</button>   
        </div>
        <div className="list-container">
          <ol>
            {list.map((item, index)=>(
                <li key={index}>
                 {item}
                 <button type='submit' onClick={()=>deleteItem(index)}>delete</button>
                </li>
            ))}  
          </ol>
        </div>
        </>
    )
}