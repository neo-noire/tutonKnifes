import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { openCart } from '../../../redux/cartSlice/cartSlice'

export const Navbar = ({ menuOpen, setMenuOpen, setCartOpen }) => {
    const cartState = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const isDesctop = useMediaQuery("(min-width: 768px)")

    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!cartState) return
        const cartCount = cartState.reduce((acc, curr) => acc += curr.quantity, 0)
        setCount(cartCount)

    }, [cartState])

    const openCartHandler = () => {
        dispatch(openCart())
    }
    return (
        <nav className={s.navbar}>
            <div className={s.content}>
                <div className={s.left}>
                    <button onClick={() => setMenuOpen(true)}>
                        <CgMenuGridO size={24} className={s.icon} />
                    </button>

                    <a className={s.icon} href="tel:+380681661673">
                        {
                            !isDesctop
                                ? <BsTelephone size={23} className={s.icon} />
                                : `38(068)166-16-73`
                        }
                    </a>

                </div>
                <div className={s.center}>
                    <NavLink to={'/'}>
                        <img src={logo} alt='logo' />
                    </NavLink>
                </div>
                <div className={s.right}>
                    <button
                        className={count !== 0 && `${s.cart}`}
                        data-count={count}
                        onClick={() => openCartHandler()}>

                        <HiOutlineShoppingBag size={23} className={s.icon} />
                    </button>
                </div>
            </div>
        </nav >
    )
}
