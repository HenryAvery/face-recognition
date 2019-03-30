import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='mb4 b--black-10 f3 ph3'>
                {`${name} , The number of faces you have captured is...`}
            </div>
            <div className='f1'>
                {entries}
            </div>
        </div>

    )
}

export default Rank;