import React from 'react';
 export default function ListComponent(props){
     return(
         <div>
             {
                 props.toDoList && props.toDoList.map(todo => <li key={todo.id}>{todo.name}</li>)
             }
         </div>
     );
 }