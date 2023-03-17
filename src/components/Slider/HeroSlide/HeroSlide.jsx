import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './HeroSlide.module.scss'

export const HeroSlide = ({ el }) => {
    const img = {
        minWidth: '100vw',
        maxHeight: 'inherit',
        backgroundImage: `url(${el.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={s.container} style={img} >
            {/* <img src={el} alt='name' /> */}
            <div className={s.component}>
                <h1 className={s.title}>{el.title}</h1>
                <p className={s.text}>
                    {el.text}
                </p>
                <NavLink to={'/category/kitchen'} className={s.link}>More</NavLink>
            </div>
        </div>
    )
}
