import React, { useState } from 'react';


const CleaningButton = ( { text, setText}) => {
    return (
        <button className='custom-button'
        // style={{float: 'none', marginLeft: '10px', display: 'inline-block'}}
        onClick={() => {
            setText(text.replace(/\n/g, ''));
        }}>
            Clean
        </button>
    );
};


const Editor2 = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <div className='editor2-container'>
                {/* Text Editor */}
                <div className='editor2-text-editor'>
                    <h2>LineBreak Cleaner
                        <CleaningButton text={text} setText={setText} />
                    </h2>
                    <textarea className='editor2-text-editor-textarea'  
                        placeholder=""
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                {/* Preview Page */}
                <div className='editor2-preview-page'>
                    <h2>Preview</h2>
                    <div className='editor2-preview-page-content'>
                    {/* <pre style={{ fontFamily: 'inherit', margin: 0, textAlign: 'left' }}>{text}</pre> */}
                    <div style={{ fontFamily: 'inherit', margin: 0, textAlign: 'left' }}>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor2;