import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='f3'>
                {`${name} , The number of faces you have captured is...`}
            </div>
            <div className='f1'>
                {entries}
            </div>
        </div>

    )
}

export default Rank;