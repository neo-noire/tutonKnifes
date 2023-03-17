import React from 'react'
import s from './Menu.module.scss'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const Menu = ({ menuOpen, setMenuOpen }) => {
    const isMobile = useMediaQuery("(max-width: 412px)")
    return (

        < div
            className={s.menu}
        >
            <button onClick={() => setMenuOpen(false)}>
                <RiArrowLeftSLine size={24} />
            </button>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <NavLink to={'/category/kitchen'} onClick={() => setMenuOpen(false)}>
                        Kitchen knives TUOTOWN
                    </NavLink>
                    <NavLink to={'/category/folding'} onClick={() => setMenuOpen(false)}>
                        Folding knives TUOTOWN
                    </NavLink>
                    <NavLink to={'/category/sharpeners'} onClick={() => setMenuOpen(false)}>
                        Knife Sharpeners
                    </NavLink>
                    <NavLink to={'/category/bbq'}>
                        BBQ sets
                    </NavLink>
                    <NavLink to={'/category/accessories'} onClick={() => setMenuOpen(false)}>
                        Accessories
                    </NavLink>
                </ul>
            </nav>
            <div className={s.info}>
                <ul className={s.navInfo}>
                    <NavLink>
                        News
                    </NavLink>
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink>
                        Contacts
                    </NavLink>
                    <NavLink>
                        How to find us
                    </NavLink>
                </ul>
            </div>
        </div >
    )
}
