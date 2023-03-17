import React from 'react'
import s from './HeroBg.module.scss'

export const HeroBg = ({ children }) => {
    const bgStyle = {
        minWidth: '100vw',
        maxHeight: 'inherit',
        backgroundImage: `url(https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/tuotown/section-logo_zfufvg.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // url: 'https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/hero-logo_zlvn56.png',
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className={s.title} style={bgStyle}>
                {children}
            </div>
        </div>
    )
}
