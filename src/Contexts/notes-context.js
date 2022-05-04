import { v4 as uuid } from "uuid";
import { createContext, useContext, useState } from "react";

const notesContext = createContext();

const NotesProvider = ({children}) => {
    const initialNote = {
        id: uuid(),
        noteTitle: "",
		noteText: "",
	}

    const [Notes, setNotes] = useState([]);
    const [ActiveNote, setActiveNote] = useState(initialNote)
    const [showEditor, setShowEditor] = useState(false);
    const [showColorPallete, setShowColorPallete] = useState(false);
    if (ActiveNote.noteText === '<p><br></p>') {
        setActiveNote(initialNote)
    }

    const [noteState, noteDispatch] = useReducer(noteReducer, {
        noteslist: [],
        archivedNotes: [],
        trashedNotes: [],
        pinnedNotes: [],
    
    });
    

    return (
        <notesContext.Provider value={{
            Notes,
            setNotes,
            ActiveNote,
            setActiveNote,
            showEditor,
            setShowEditor,
            showColorPallete,
            setShowColorPallete,
        }} >
            {children}
        </notesContext.Provider>
    )
}

const useNotes = () => useContext(notesContext);

export { useNotes, NotesProvider }