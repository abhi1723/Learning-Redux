import React, { useEffect, useState }  from 'react';
import InputTextComponent from './Components/InputTextComponent';
import ListComponent from './Components/ListComponent';
import Data from './Components/Data';
function createStore(reducer){
  let state;
  let listeners =[];
  const getState = () => state;
  const subscribe = (listener) =>{
    listeners.push(listener);
  }
  const unsubscribe =(listener) =>{
    listeners = listeners.filter( l => l!==listener);
  }
  const dispatch =(action) =>{
    state = reducer(state,action);
    listeners.forEach(listener => listener());
  }
  return{
    getState,
    subscribe,
    unsubscribe,
    dispatch
  }
}
function reducer(state={},action){
  return{
    todos : todos(state.todos,action),
  }
}
function todos(todos=[],action){
  if(action.type==="ADD_TODO"){
    return todos.concat([action.todo]);
  }
  else if(action.type==="DELETE_TODO"){
    return todos.filter(todo => todo.id !== action.id);
  } 
  if(action.type==="ADD_TODOS"){
    return action.todos;
  }
  // else if(action.type=="UPDATE_TODO"){
  //   return todos.map(todo =>{todo.id !==action.id? todo : Object.assign({},todo,{isComplete: false})});
  // }
}
const store = createStore(reducer);
store.subscribe(()=>{
  console.log("Subscribed",store.getState());
})
function App() {
  const [toDoList,setToDoList] = useState([]);
  const [showloading,setShowLoading] = useState(true);
  const forceUpdate =() => {
    setToDoList(store.getState().todos);
  }
  useEffect(()=>{
    Promise.all([
      Data()
    ],).then(([todos])=>{
      console.log("todos from Promise",todos);
      store.dispatch({
        type : 'ADD_TODOS',
        todos
      })
      setToDoList(store.getState().todos);
      setShowLoading(false);
    })
  },[]);
  
  return (
    <div className="App">
      <h1>TODO APP </h1>
      {showloading ? <h1>Loading...!!</h1> :
      <span>
        <InputTextComponent store={store} forceUpdate={forceUpdate} />
        <ListComponent toDoList={toDoList} />
      </span>} 
    </div>
  );
}

export default App;
