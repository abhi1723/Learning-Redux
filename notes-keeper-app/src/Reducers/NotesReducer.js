import {ADD_NOTE , DELETE_NOTE} from "../Constants";
export default function notes(state=[],action){
    if(action.type === ADD_NOTE){
        return state.concat([action.note]);
    }
    if(action.type === DELETE_NOTE){
        return state.filter(note => note.id !== action.id);
    }
    return state;
}