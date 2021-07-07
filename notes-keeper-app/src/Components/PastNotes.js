import React, { useEffect, useState } from 'react';
import {StoreContext} from "../Contexts";
 function PastNotes(props){
    const [notes,setNotes] = useState([]);
    useEffect(()=>{
        props.store.subscribe(()=>{
            setNotes(props.store.getState().notes);
        })
    },[props.store])
    return(
        <div>
            <h1>Past Notes</h1>
            {notes.map((n) => <p key={n.id}>{n.note}</p>)}
        </div>
    )
}

export default function connected(){
    return(
        <StoreContext.Consumer>
            {(value) =>(
                <PastNotes store = {value}/>
            )}
        </StoreContext.Consumer>
    )
}