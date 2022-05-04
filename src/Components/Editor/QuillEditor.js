import React from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useNotes } from '../../Contexts/notes-context';
import './Editor.css'

const QuillEditor = ({func, value}) => {
    const { Notes, setNotes, ActiveNote, setActiveNote, showEditor, setShowEditor, showColorPallete, setShowColorPallete } = useNotes();
    const modules = {
    	toolbar: [
    		["bold", "italic", "underline", "strike"],
    		// ["blockquote", "code-block"],
    		[{ list: "ordered" }, { list: "bullet" }],
    		[{ indent: "-1" }, { indent: "+1" }],
    		[{ header: [1, 2, 3, 4, 5, 6, false] }],
    		[{ align: [] }],
    	],
        clipboard: {
            matchVisual: false
          },
    };
    
    
    return (
        <div>
            <ReactQuill
                    // theme="snow"
                    placeholder='Take a note...'
                    modules={modules}
                    value={value}
                    onChange={func} />
        </div>
    );
};

export default QuillEditor;