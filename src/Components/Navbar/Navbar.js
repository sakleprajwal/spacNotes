import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../../Contexts/sidebar-context';
import  styles  from './Navbar.module.css'

const Navbar = () => {
    const {sidebar, setSidebar} = useSidebar();

    const sidebarHandler = () => {
        setSidebar(!sidebar);
    }

    return (
        <div>
            <div className={`flex-row ${styles.navbar__container}`}>
                <div className={`flex-row ${styles.navbar__brand__container}`}>
                    <button onClick={sidebarHandler} className='icon-btn icon-btn-hover'><i className="far fa-bars"></i></button>
                    <div className={styles.nav__brand}>spacNote</div>
                </div>
                <div className={`flex-row ${styles.nav__action}`}>
                    <Link to='/login' className={styles.nav__btn}>Login</Link>
                    <Link to='/signup' className={styles.nav__btn}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;