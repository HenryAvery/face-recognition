import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3 ph3'>
                {'This Magic Brain will detect faces in your picture. Give it a try. '}
            </p>
            <div className="flex justify-center">
              <div className='form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='Img url...'/>
                <button className='mt3 w-30 grow f4 link ph2 pv2 dib' onClick={onButtonSubmit}>Detect</button>
                </div>          
            </div>
        </div>
    )
}

export default ImageLinkForm;