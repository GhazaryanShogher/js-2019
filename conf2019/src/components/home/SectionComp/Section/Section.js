import React from 'react';
import './Section.css';
// import { url } from 'inspector';

const Section = ({isleft,imgUrl,text,title,buttonText,color,colorText}) => {
    return (
        isleft ?
            <div className={'section_container'}>
                <div className={'imagePart'} style={{backgroundImage:`url('../../'${imgUrl})`}}>
                     <img src={imgUrl} alt="img"/>
                </div>
                <div className={'textPart'}>
                    <h1>{title}<span style={{color:`${color}`}}>{colorText}</span></h1>
                    <p>{text}</p>
                    <button style={{borderColor:`${color}`}}>{buttonText}</button>
                </div>
            </div>
            :
            <div className={'section_container'}>
                <div className={'textPart'}>
                    <h1>{title}<span style={{color:`${color}`}}>{colorText}</span></h1>
                    <p>{text}</p>
                    <button style={{borderColor:`${color}`}}>{buttonText}</button>
                </div>
                <div className={'imagePart'} style={{backgroundImage:`url(${imgUrl})`}}>
                    {/* <img src={imgUrl} alt="img"/> */}
                </div>
            </div>
    );
};

export default Section;