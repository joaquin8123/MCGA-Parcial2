import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Footer.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                <li>
                    <Link to={'/'} className='text-light'>
                        Home
                    </Link>
                </li>
                <li>
                    Terminos y condiciones
                </li>
                <li>
                    Contactenos
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
