import React, { useRef } from 'react';
import {AddNoteActionCreator} from '../Actions/NotesAction';
import {StoreContext} from '../Contexts';
function CreateNotes(props){
    const note = useRef(null);
    function generateId(){
        return Math.random().toString(36).substring(2)+(new Date().getTime().toString(36));
    }
    const createNote =() =>{
        let noteObject = { id: generateId(),note :note.current.value};
        console.log(AddNoteActionCreator(noteObject))
        if(note.current.value.length>0){
            props.store.dispatch(AddNoteActionCreator(noteObject));
        }
        note.current.value='';
    }
    return(
        <div>
            <span>Enter Notes : </span>
            <span><input type="text" name={'notes'} ref={note}/></span>
            <span> </span>
            <span><button name="submit" onClick={createNote}>Submit</button></span>
        </div>
    )
}
export default function ConnectedComponent(){
    return (
        <StoreContext.Consumer>
            {(store) =>(
                <CreateNotes store={store}/>
            )}
        </StoreContext.Consumer>
    )
}