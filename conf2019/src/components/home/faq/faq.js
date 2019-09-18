import React from 'react';
import './faq.css';


const faqs = [
    {
        title: 'What is JS Conf Armenia?',
        text: 'JS Conf is to bring together JavaScript developers to attend talks,\n' +
            '                        workshops, participate in competitions, get informed about open\n' +
            '                        positions at sponsor IT companies and just have fun.'
    },

    {
        title: 'How to participate?',
        text: 'The entry of JS Conf 2019 is invitation-only so please make sure to\n' +
            '                        request your invite here.'
    },

    {
        title: 'Who are the speakers?',
        text: 'To learn more about our speakers, please click here. Want to join\n' +
            'them? Apply here to become a speaker.'
    },
    {
        title: 'How much is the entry-ticket?',
        text: 'The event entry is free of charge.'
    },
    {
        title: 'What are the talk topics?',
        text: 'To see the talk sessions timetable and topics, please click here.'
    },
    {
        title: 'When is the deadline for registration?',
        text: 'There is no deadline but the sooner you register the more interesting\n' +
            'it will be for you as a participant as you will have the chance to take\n' +
            'part in the pre-conference activities.'
    },
    {
        title: 'What is the conference language?',
        text: 'The conference will be held both in Armenian and English.'
    },
    {
        title: 'Who are behind the JS Conf Armenia?',
        text: 'To see the JS Conf Armenia team, please, click here.'
    },
    {
        title: 'When is it going to take place?',
        text: 'The conference will take place from 10:00 to 17:30 on Nov 3, 2019.'
    },
    {
        title: 'How to join the team?',
        text: 'To help the team to make JS Conf Armenia happen please apply here to become a JS Conf jedi volunteer!'
    },
    {
        title: 'Where is it going to be held?',
        text: 'JS Conf Armenia will be held at Marriott Armenia, Amiryan 1, Yerevan.'
    },
    {
        title: 'Who supports JS Conf Armenia?',
        text: 'To learn about our sponsors and partners, please, click here.'
    },
];


const Faq = () => {
    return (
        <div className={'toCenter'}>
            <div className={'faq_title'}>
                FREAKING<span style={{color: '#FF4700'}}>FAQ</span>
            </div>

            <div className={'faq_info'}>

                {faqs.map((faq,i) => {
                    return (
                        <div className={'single_faq'} key={faq.title+i}>
                            <div className={'single_faq_title'}>{faq.title}</div>
                            <div>{faq.text}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Faq;

