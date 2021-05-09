function createStore() {
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

    return{
        getState,
        subscribe
    };
}
const store = createStore();
store.subscribe(()=>{
    console.log("The new state is : ",store.getState);
});
store.subscribe(()=>{
    console.log("The store changed.");
});
