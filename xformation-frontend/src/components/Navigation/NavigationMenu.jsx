import React, {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom";

import { navElements, iconsInformation  } from './NavigationContent';

import '../../sass/Navigation.scss';

import logo from '../../img/logo.png';
import hamburgerImages from '../../img/burger-nav.png';
import hamburgerImagesCross from '../../img/burger-nav-cross.png';

const NavigationMenu = () => {
    const [hide, setHide] = useState(false);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(false);
    
    const showHamburgerMenu = () => {
        setOpen(current => !current);
        setImage(current => !current);
    }

    useEffect(() => {
        const handler = () => window.scrollY >= 10 ? setHide(true) : setHide(false);
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, []);

    return (
        <div>
            <header>
                <nav className={hide ? "navbar fixed" : "navbar"}>
                    <div className="main__title">
                        <img src={logo} alt={"logo"} id={"logo"}/>
                        <Link to={"/"} id={"logo"}>xFP'Service</Link>
                    </div>
                    <div className={open ? "nav-links mobile-menu" : "nav-links"}>
                        <ul className={"content"}>
                            {navElements.map((items) => (
                                <li key={items.content}><Link to={items.path}>{items.icon} {items.content}</Link></li>
                            ))}
                        </ul>

                        <ul className={"icon-infos"}>
                            {iconsInformation.map((items) => (
                                <li key={items.path}><Link to={items.path}>{items.icon}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <img src={image ? hamburgerImagesCross : hamburgerImages} alt="" className="hamburger-menu" onClick={showHamburgerMenu} />
                </nav>
            </header>
        </div>
    );
};

export default NavigationMenu;
