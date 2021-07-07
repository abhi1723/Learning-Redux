import notes from "./NotesReducer"
export default function app (state={},action){
    return{
        notes : notes(state.notes,action)
    }
}