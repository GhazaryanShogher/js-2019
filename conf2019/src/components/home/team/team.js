import React from 'react';
import './team.css';

import m1 from '../../../images/member1.png';
import m2 from '../../../images/member2.png';
import m3 from '../../../images/member3.png';
import m6 from '../../../images/member6.png';
import m5 from '../../../images/member5.png';


const teamMembers = [
    {
        name: 'Alexander Adamyan',
        url: m1,
        position: 'Co-Founder at Simply Technologies'
    },
    {
        name: 'Varser Zakaryan',
        url: m6,
        position: 'Project Manager at JSConf Armenia'
    },
    {
        name: 'Gevorg Harutyunyan',
        url: m3,
        position: 'Front-End Architect at Screenful, Founder of ModularCode'
    },
    {
        name: 'Rouben Meschian',
        url: m5,
        position: 'Founding Software Engineer at Cambridge Semantics'
    },
    {
        name: 'Edgar Marukyan',
        url: m2,
        position: 'CTO at Renderforest'
    },
];

const Team = () => {
    return (
        <div className={'toCenter'}>

            <div className={'team_title'}>
                GALACTIC <span style={{color: '#FF4700'}}>TEAM</span>
            </div>

            <div className={'galaxic_team'}>
                {teamMembers.map((member, i) => {

                    return (
                        <div className={'member_info'} key={i}>

                            <div className={'mem_img'}
                                style={{
                                    background: `url(${ member.url })`,
                                    backgroundSize:'cover'
                                }}
                            >
                            </div>

                            <div className={'name'}>{member.name}</div>
                            <div className={'position'}>{member.position}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Team;