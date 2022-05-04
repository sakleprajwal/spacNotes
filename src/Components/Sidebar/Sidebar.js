import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSidebar } from '../../Contexts/sidebar-context';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    const {sidebar} = useSidebar();
    return (
        <div className={`flex-column ${styles.sidebar__container} ${sidebar ? styles.sidebar__visible : styles.sidebar__hide}`}>
            <NavLink to='/' style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "var(--primary-color-opaque)" : "",
              };
            }} className={styles.sidebar__item}>Home</NavLink>
            <NavLink to='/archieve' style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "var(--primary-color-opaque)" : "",
              };
            }} className={styles.sidebar__item}>Archieve</NavLink>
            <NavLink to='/trash' style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "var(--primary-color-opaque)" : "",
              };
            }} className={styles.sidebar__item}>Trash</NavLink>
        </div>
    );
};

export default Sidebar;