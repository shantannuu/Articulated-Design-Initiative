import React from 'react'
import News from '../../Components/New2/News'
import './Media.css'
function Media() {
    useEffect(() => {
        usersVisited();
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mediaPage'>

            <News />
        </div>
    )
}

export default Media