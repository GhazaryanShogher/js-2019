import React from 'react';
import Section from "./SectionComp/Section/Section";
import jedi from "../../images/Illustrations1/Jedies.png";


const Speakers = () => {
    return (
        <Section
            isleft={true}
            colorText={'Jedies'}
            color={'#FF4700'}
            title={'Call For '}
            imgUrl={jedi}
            text={'Share your knowledge and skills in JavaScript with the\n' +
            'regional JS community.\n' +
            'Become a JS Conf 2019 speaker!'}
            buttonText={'Become a Jedi'}
        />
    );
};

export default Speakers;