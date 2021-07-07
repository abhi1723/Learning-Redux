import {ADD_NOTE , DELETE_NOTE} from "../Constants";
export  const AddNoteActionCreator = (note) => {
    return {
        type : ADD_NOTE,
        note 
    }
}

export const DeleteNoteActionCreator = (id) =>{
    return {
        type : DELETE_NOTE,
        id
    }
}