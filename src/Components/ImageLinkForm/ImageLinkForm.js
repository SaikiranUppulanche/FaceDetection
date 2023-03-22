import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='f3 tc'>
            <p>{'This Magic Brain will detect faces in the images. Give it a try'} </p>
            <div className='center '>
                <div className='center form pa4 br3 shadow-5' >
                    <input className='f4 pa2 br2 bn w-70 center' type='text' onChange={onInputChange} />
                    <button
                        className='w-30 br2 grow f4 b--white link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm