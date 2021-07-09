import React from "react";
import CreateNotes from "./CreateNotes";
import PastNotes from "./PastNotes";
// import CreateStore from "../Store";
// import Reducer from "../Reducers/Reducer";
import notes from "../Reducers/NotesReducer";
import {StoreContext} from "../Contexts";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {ADD_NOTE} from "../Constants";
export default function Container() {

    const checkerMiddleware = store => next =>action =>{
        if(action.type ===ADD_NOTE){
            console.log("Logging Info. through the middleware", store.getState().notes);
        }
        return next(action);
    }
    // const store = CreateStore(Reducer);
    const store = createStore(combineReducers({
        notes
    }),applyMiddleware(checkerMiddleware));
    store.subscribe(() => {
        console.log("state : ", store.getState() );
    })
    return (
        <div>
            <h1>Notes Keeper</h1>
            <StoreContext.Provider value = {store}>
                <CreateNotes />
                <PastNotes/>
            </StoreContext.Provider>
        </div>
    )
}