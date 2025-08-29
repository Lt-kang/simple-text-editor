import React, { useState, useEffect } from 'react';


const enclosedAlphanumericsMap = {
    '①': '1:',
    '②': '[@]\n2:',
    '③': '[@]\n3:',
    '④': '[@]\n4:',
    '⑤': '[@]\n5:',

    '\n②': '[@]\n2:',
    '\n③': '[@]\n3:',
    '\n④': '[@]\n4:',
    '\n⑤': '[@]\n5:',

    '[token]②': '[@]\n2:',
    '[token]③': '[@]\n3:',
    '[token]④': '[@]\n4:',
    '[token]⑤': '[@]\n5:'
}


const CleaningButton = ( { text, setText}) => {
    return (
        <button className='custom-button'
        onClick={() => {
            let newText = text;

            for (const [key, value] of Object.entries(enclosedAlphanumericsMap)) {
                newText = newText.replace(key, value);
            }

            setText(newText);
        }}>
            Clean
        </button>
    );
};


const Editor1 = () => {
    const [text, setText] = useState('');
    // const [history, setHistory] = useState([]);

    const handleTextChange = (e) => {
        setText(e.target.value);
        // setHistory([...history, e.target.value]);
    };

    // useEffect(() => {
    //     console.log(history);
    //     const handleUndo = (e) => {
    //         if (e.ctrlKey && e.key === 'z') {
    //             e.preventDefault();
    //             if (history.length > 1) {
    //                 const newHistory = history.slice(0, -1);
    //                 setHistory(newHistory);
    //                 setText(newHistory[newHistory.length - 1] || '');
    //             }
    //         }
    //     };

    //     document.addEventListener('keydown', handleUndo);
    //     return () => {
    //         document.removeEventListener('keydown', handleUndo);
    //     };
    // }, [history]);

    return (
        <div>
            <div className='editor1-container'>
                {/* Text Editor */}
                <div className='editor1-text-editor'>
                    <h2>Circled Numbers Cleaner 
                        <CleaningButton text={text} setText={setText} />
                    </h2>
                    <textarea className='editor1-text-editor-textarea'  
                        placeholder=""
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>

                {/* Preview Page */}
                <div className='editor1-preview-page'>
                    <h2>Preview</h2>
                    <div className='editor1-preview-page-content'>
                    {/* <pre style={{ fontFamily: 'inherit', margin: 0, textAlign: 'left' }}>{text}</pre> */}
                    <div style={{ fontFamily: 'inherit', margin: 0, textAlign: 'left' }}>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor1;