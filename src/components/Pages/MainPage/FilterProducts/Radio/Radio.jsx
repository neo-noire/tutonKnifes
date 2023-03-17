import React from 'react'
import s from './Radio.module.scss'

export const Radio = ({ children }) => {
    const isActive = true;
    return (
        <React.Fragment>
            <label className={`${s.filter} ${isActive ? 'radBtn' : 'selectedAnswer'}`}>
                <input onChange={e => (e.target.value)} type='radio' name='filter' value={'Kitchen'} className={s.checkbox} />
                {/* <KnifesOne className={s.icon} /> */}

                {children}
                Kitchen Knifes
            </label>
        </React.Fragment>
    )
}
