function createStore(todos) {
    // The store should have 4 parts
    // 1. The state tree
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state
    
    let state // Step 1 
    let listeners =[];
    const getState = () => state; //Step 2

    const subscribe = (listener) =>{
        listeners.push(listener);
    };

    const unubscribe =(listener) =>{
        return () =>{
            listeners = listeners.filter((l) => l != listener);
        }
    }
    const dispatch = action =>{
        state =todos(state,action);
        listeners.forEach(listener => listener());
    }
    return{
        getState,
        subscribe,
        dispatch
    };
}
// REDUCER
function todos(state=[],action){
    if(action.type=="ADD_TODO"){
        return state.concat([action.todo]);
    }
    if(action.type=="REMOVE_TODO"){
        return state.filter(todo => todo.id!==action.id)
    }
    if(action.type=="TOGGLE_TODO"){
        // For that particular ID, fetch the object & reverse the value of isComplete
        return state.map(todo => todo.id!==action.id?todo: Object.assign({},todo,{isComplete:!todo.isComplete}));
    }
    return state;
}
const store = createStore(todos);
store.subscribe(()=>{
    console.log("The new state is : ",store.getState());
});
store.subscribe(()=>{
    console.log("The store changed.");
});
store.dispatch({
  type : "ADD_TODO",
  todo:{
      id: 1,
      name: "Redux Complete",
      isComplete: false
  }  
})
store.dispatch({
    type : "TOGGLE_TODO",
    id : 1  
  })
  store.dispatch({
    type : "REMOVE_TODO",
    id: 1  
  })