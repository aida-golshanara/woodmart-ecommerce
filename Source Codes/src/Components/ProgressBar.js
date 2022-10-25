import React from 'react';
import '../Styles/components/ProgressBar.css';

const Progress_bar = ({progress,height}) => {

    const Parentdiv = {
        height: height
    }

    const Childdiv = {
        width: `${progress}%`
    }

    return (
        <div style={Parentdiv} className='Parentdiv'>
            <div style={Childdiv} className='Childdiv'>
                <span></span>
            </div>
        </div>
    )
}

export default Progress_bar;
