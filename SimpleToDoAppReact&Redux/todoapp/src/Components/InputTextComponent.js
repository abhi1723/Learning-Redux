import React, { useRef } from 'react';

export default function InputTextComponent(props){
    const toDoName=useRef();
    function generateId(){
        return Math.random().toString(36).substring(2)+(new Date().getTime().toString(36));
    }
    const actionCreator =() =>{
        return {
            type : "ADD_TODO",
            todo: {
              id : generateId(),
              name : toDoName.current.value,
              isComplete : false
            }
          };
    }
    const addTodo =() =>{
        props.store.dispatch(actionCreator());
        props.forceUpdate();
        toDoName.current.value='';
    }
    return(
        <div>
            <input type = "text" ref= {toDoName}/>
            <br/>
            <button onClick={addTodo}>Submit</button>
        </div>
    )
}