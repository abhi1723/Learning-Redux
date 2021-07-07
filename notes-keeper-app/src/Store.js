export default function createStore(reducer){
    let state;
    let listeners=[];

    const getState = () => state;

    const subscribe = (listener) =>{
        listeners.push(listener);
    }

    const unsubscribe = (listener) =>{
        listeners = listeners.filter(l => l!==listener);
    }

    const dispatch = (action) =>{
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
