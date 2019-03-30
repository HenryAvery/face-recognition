import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return(
            <nav className='flex justify-end'>
                <p onClick={() => onRouteChange('signout')} className='f4 link dim pa3 pointer'>Sign out</p>
            </nav>
            )
        } else {
            return (
                    <nav className='flex justify-end'>
                        <p onClick={() => onRouteChange('signin')} className='f4 link dim pa3 pointer'>Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='f4 link dim pa3 pointer'>Register</p>
                    </nav>
            )
        }
}

export default Navigation;