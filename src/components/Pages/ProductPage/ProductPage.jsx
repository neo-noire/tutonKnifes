import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeroBg } from '../../HeroBg/HeroBg'
import s from './ProductPage.module.scss'
import { data } from '../../data/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, openCart } from '../../../redux/cartSlice/cartSlice'

export const ProductPage = () => {
    window.scrollTo(0, 0)
    const dispatch = useDispatch()
    const prodId = useParams().id
    const [prod, setProd] = useState([])
    const [isInCart, setIsInCart] = useState(false)
    const cartState = useSelector(state => state.cart.items)



    useEffect(() => {
        if (data) {
            setProd(data.filter(el => el.id === Number(prodId)))
        }
    }, [prodId])

    useEffect(() => {
        if (cartState && prod[0]) {
            const find = cartState.filter(item => item.id === prod[0].id)

            find.length === 0
                ? setIsInCart(true)
                : setIsInCart(false)
        }
    }, [prod, cartState])

    const addToCart = () => {
        dispatch(addItem({ ...prod[0] }))
    }

    const openCartHandler = () => {
        dispatch(openCart())
    }

    return (
        <div>
            {/* here should be rendered category bg / 
            or ralevant picture of product for bg */}
            <HeroBg >
                <div className={s.productHero}>
                    <div className={s.prodName}>
                        <h1>Exceptional quality without compromise</h1>
                        <h3>{prod && prod[0]?.name}</h3>
                        <div className={s.cart}>
                            {
                                isInCart
                                    ? <button onClick={addToCart}>Add to cart</button>
                                    : <button onClick={openCartHandler} className={s.inCart}>Go to Cart</button>
                            }
                            <span>{prod[0]?.price}$</span>
                        </div>
                    </div>
                </div>
            </HeroBg>

            <section className={s.about}>
                {
                    prod && prod[0]?.description?.map(el => <div key={el.prodUrl} className={s.description}>
                        <div className={s.imgContainer}>
                            <img src={el.prodUrl} alt='desc img' />
                        </div>
                        <div className={s.descContainer}>
                            <h3>{el.title}</h3>
                            <p>
                                {el.text}
                            </p>
                        </div>
                    </div>)
                }
            </section>
            <section className={s.properties}>
                <div className={s.imgContainer}>
                    <img src={'https://res.cloudinary.com/dj8y8vspg/image/upload/v1678916013/portfolio/tuotown/knifes/image_27_ywxzen.png'} alt='characteristics' />
                </div>
                <div className={s.propsContainer}>
                    <h3>Properties: </h3>
                    <ul>
                        {prod && prod[0]?.props.map((el, idx) => <li key={`${idx}-${el.value}`} className={s.propItem}>{el.prop}: <span className={s.itemValue}>{el.value}</span></li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    )
}
