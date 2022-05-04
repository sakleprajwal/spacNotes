import React from 'react';
import { v4 as uuid } from "uuid";
import { useState } from 'react';
import { useNotes } from '../../Contexts/notes-context';
import styles from './Home.module.css'
import DOMPurify from "dompurify";
import QuillEditor from '../../Components/Editor/QuillEditor';

const Home = () => {

	const { Notes, setNotes, ActiveNote, setActiveNote, showEditor, setShowEditor, showColorPallete, setShowColorPallete } = useNotes();
	const initialNote = {
        id: uuid(),
        noteTitle: "",
		noteText: "",
        // noteBgColor: "#ff0000",
	}
    console.log("Outside: ", ActiveNote)

    const { id, noteText, noteTitle } = ActiveNote;

    // const colorsArray = [{ title: "WHITE", value: "#ff0000" },
    // { title: "GRAY", value: "#0000ff" },];

	// const [ActiveNote, setActiveNote] = useState(initialNote)
     
    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setActiveNote({ ...ActiveNote, [name]: value });
        
    };

    const submitHandler = (e) => { 
		e.preventDefault();
        setNotes([...Notes, ActiveNote]);
        setActiveNote(initialNote);
        setShowEditor(!showEditor); 
    }

    const discardHandler = () => {
        setActiveNote(initialNote);
        setShowEditor(!showEditor)
    }

    const editNoteHandler = (note) => {
        console.log(note)
        setActiveNote(note);
        setShowEditor(true)
    }

    return (
        <div>
            <form className={`${styles.editor__container} ${showEditor ? styles.show__editor : styles.hide__editor}`}>
                <div className='flex-row'>
                    <input
                        type="text"
                        name="noteTitle"
                        value={noteTitle}
                        onChange={(e) => inputHandler(e)}
                        
                        placeholder="Title"
                        className={styles.title__input}
                        required
                    />
                    <button onClick={(e) => discardHandler(e)} className='icon-btn'><i className="far fa-times"></i></button>
                    <button onClick={(e) => submitHandler(e)} className='icon-btn'><i className="far fa-check"></i></button>
                </div>
                <QuillEditor
                    value={noteText}
                    func={(e) => setActiveNote({...ActiveNote, noteText: e})}
                />
            </form>

            <div className={`flex-row ${styles.all__notes__section}`}>
                {
                    Notes.map((item) => (
                        <div key={item.id} onClick={() => editNoteHandler(item)} className={styles.note__card} style={{backgroundColor: item.noteBgColor}}>
                            <div className={styles.hover__to__show__action}>
                            <div className={styles.note__title}>{item.noteTitle}</div>
                            <div className={styles.text} dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item.noteText),
                            }}></div>
                            <div className={styles.note__tagpill}>Tag</div>
                            </div> 
                            <div className={styles.note__card__actions}>
                                <button className='icon-btn icon-btn-hover'><i className="far fa-thumbtack"></i></button>
                                <button onClick={() => setShowColorPallete(!showColorPallete)} className='icon-btn icon-btn-hover'><i className="far fa-palette"></i></button>
                                <button className='icon-btn icon-btn-hover'><i className="far fa-archive"></i></button>
                                <button className='icon-btn icon-btn-hover'><i className="far fa-trash"></i></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={() => setShowEditor(!showEditor)} className={styles.fixed__btn}><i className="far fa-plus"></i></button>
            </div>
        </div>
    );
};

export default Home;