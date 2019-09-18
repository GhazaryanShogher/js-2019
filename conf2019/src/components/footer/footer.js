import React from 'react';
import './footer.css';
import logo from "../../images/logo.png";
import fb from '../../images/footer.png';
import {Link} from "react-router-dom";

import githubwhite from '../../images/githubwhite.png';
import fbWhite from '../../images/fbwhite.png';
import twWhite from '../../images/twitwhite.png';
import instred from '../../images/instred.png';
import youtubeRed from '../../images/youtubewhite.png';

const Footer = () => {
    return (
        <>
            <div className={'wrapper'}>
                <div className={'footer'}>

                    <div className={'logo'}>
                        <Link to={'/'}>
                            <img src={logo} alt="img"/>
                        </Link>
                    </div>

                    <div className={'social_items'}>
                        <div>
                            <img src={githubwhite} alt=""/>
                        </div>
                        <div>
                            <img src={fbWhite} alt=""/>
                        </div>
                        <div>
                            <img src={twWhite} alt=""/>
                        </div>
                        <div>
                            <img src={instred} alt=""/>
                        </div>
                        <div>
                            <img src={youtubeRed} alt=""/>
                        </div>
                    </div>

                    <div>Press Release <span>AM / EN</span></div>
                    <div>
                        Design and branding by
                        <span>@davidtiger</span>,coded in React.js by
                        <span>@modularcoder</span>
                    </div>
                </div>
            </div>
            <div className={'footer_image'}>
                <img src={fb} alt="f"/>
            </div>
        </>
    );
};

export default Footer;