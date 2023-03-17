import React, { useState } from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
import s from './Layout.module.scss'
import menu from './menuTransition.module.scss'
import { Menu } from './Menu/Menu'
import { Cart } from './Cart/Cart'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

export const Layout = ({ children }) => {
    const isOpen = useSelector(state => state.cart.isOpen)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <React.Fragment>
            <div className={menuOpen || isOpen ? `${s.layout}` : `${s.layoutOff}`}>
                <CSSTransition
                    in={menuOpen}
                    timeout={500}
                    classNames={menu}
                    mountOnEnter
                    unmountOnExit
                >
                    <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                </CSSTransition>

                <Navbar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen} />
                {children}
                <Footer />

                <Cart />

            </div>
        </React.Fragment>
    )
}
