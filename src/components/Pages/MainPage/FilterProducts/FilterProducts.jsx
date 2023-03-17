import React, { useState } from 'react'
import s from './FilterProducts.module.scss'
import { ReactComponent as Hat } from '../../../../assets/Hat.svg'
import { ReactComponent as KnifesTwo } from '../../../../assets/KnifesTwo.svg'
import { ReactComponent as KnifesOne } from '../../../../assets/KnifesOne.svg'
import { ReactComponent as FoldingKnife } from '../../../../assets/FoldingKnife.svg'


export const FilterProducts = ({ setFilter }) => {

    const changeFilter = (e) => {
        setFilter(e)
        console.log(e);
    }



    return (
        <section className={s.productsFilter}>
            <input id={'kitchen'} onChange={e => changeFilter(e.target.value)} type='radio' name='filter' value={'kitchen'} className={s.checkbox} />
            <label htmlFor={'kitchen'} className={s.filter}>
                <KnifesOne className={s.icon} />
                <span>
                    Kitchen Knifes
                </span>
            </label>

            <input id={'Folding'} onChange={e => changeFilter(e.target.value)} type='radio' name='filter' value={'Folding'} className={s.checkbox} />
            <label htmlFor={'Folding'} className={`${s.filter} `}>
                <FoldingKnife className={s.icon} />
                <span>
                    Folding Knifes
                </span>
            </label>
            <input id={'Sharpener'} onChange={e => changeFilter(e.target.value)} type='radio' name='filter' value={'Sharpener'} className={s.checkbox} />
            <label htmlFor={'Sharpener'} className={`${s.filter} `}>
                <KnifesTwo className={s.icon} />
                <span>
                    Knife sharpeners
                </span>
            </label>
            <input id={'Accessories'} onChange={e => changeFilter(e.target.value)} type='radio' name='filter' value={'Accessories'} className={s.checkbox} />
            <label htmlFor={'Accessories'} className={`${s.filter}`}>
                <Hat className={s.icon} />
                <span>
                    Kitchen Accessories
                </span>
            </label>
        </section>
    )
}
