import React from "react";
import CreateNotes from "./CreateNotes";
import PastNotes from "./PastNotes";
// import CreateStore from "../Store";
// import Reducer from "../Reducers/Reducer";
import notes from "../Reducers/NotesReducer";
import {StoreContext} from "../Contexts";
import { combineReducers, createStore } from "redux";
export default function Container() {
    // const store = CreateStore(Reducer);
    const store = createStore(combineReducers({
        notes
    }));
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