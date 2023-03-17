import React, { useEffect, useState } from 'react'
import { Card } from '../../../Card/Card'
import s from './FeaturedProducts.module.scss'
import { products } from '../../../data/products.js'

export const FeaturedProducts = () => {
    const [chosen, setChosen] = useState('new')
    const [cards, setCards] = useState([])
   

    useEffect(() => {
        if (chosen === 'new') {
            setCards(products.filter(el => el.isNew === true))
        } else {
            setCards(products.filter(el => el.isPopular === true))
        }
    }, [chosen])

    return (
        <div className='wrapper'>
            <section className={s.featured}>
                <div className={s.radio}>
                    <input
                        defaultChecked
                        onClick={(e) => { setChosen(e.target.value) }}
                        type="radio"
                        value={'new'}
                        name='featured'
                        id={'new'}
                        className={s.checkbox} />
                    <label htmlFor={'new'} className={s.item}>
                        New Products
                    </label>
                    <input
                        onClick={(e) => { setChosen(e.target.value) }}
                        type="radio"
                        value={'popular'}
                        name='featured'
                        id={'popular'}
                        className={s.checkbox} />
                    <label htmlFor={'popular'} className={s.item}>
                        Popular
                    </label>
                </div>
                <div className={s.cards}>
                    {cards && cards.map(el => <Card key={el.id} el={el} />)}
                </div>
            </section>
        </div>
    )
}
