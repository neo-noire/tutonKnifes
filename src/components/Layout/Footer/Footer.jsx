import React from 'react'
import s from './Footer.module.scss'
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.top}>

                    <div className={s.left}>
                        <NavLink to={'/'} className={s.logo}>
                            <img src={logo} alt='logo' />
                            <span >legendary knives, <br /> that create masterpieces</span>
                        </NavLink>
                        <p className={s.text}>
                            Tuotown is the exclusive representative of professional kitchen
                            knives made by the best craftsmen in East Asia using advanced
                            European equipment and modern materials.
                        </p>
                        <p className={s.text}>
                            They are distinguished by perfect balance and fantastic sharpness.
                            They combine centuries-old traditions and the latest developments.
                            We also offer a wide range of related products.
                        </p>
                    </div>

                    <div className={s.center}>
                        <div className={s.links}>
                            <h3>Info</h3>
                            <ul>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink>News</NavLink></li>
                                <li><NavLink>About</NavLink></li>
                                <li><NavLink>Contacts</NavLink></li>
                            </ul>
                        </div>
                        <div className={s.links}>
                            <h3>Catalogue</h3>
                            <ul>
                                <li><NavLink to={'/category/kitchen'}>Kitchen Knifes</NavLink></li>
                                <li><NavLink to={'/category/Folding'}>Folding Knifes</NavLink></li>
                                <li><NavLink to={'/category/Sharpener'}>Sharpener</NavLink></li>
                                <li><NavLink to={'/category/Accessories'}>Acessories</NavLink></li>
                            </ul>
                        </div>
                        <div className={s.links}>
                            <h3>We in social media:</h3>
                            <ul>
                                <li><a target={'_blank'} href='https://twitter.com'>Twitter</a></li>
                                <li><a target={'_blank'} href='https://instagram.com'>Instagram</a></li>
                                <li><a target={'_blank'} href='https://www.youtube.com'>Facebook</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={s.right}>
                        <h3>Contact Info</h3>
                        <div className={s.contacts}>
                            <a href='tel:+380681661673'>+380681661673</a>
                            <a href='mailto:tuotown@mail.com'>tuotown@mail.com</a>
                            <span>08:00 - 18:00, Every day</span>
                            <span>Green Garden, Sopot, Gdansk</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.copyright}>
                    <div>TUOTOWN © 2021 TUOTOWN trademark is registered.
                        All rights reserved and belong to their respective owners.</div>
                </div>

            </div>
        </footer>
    )
}
