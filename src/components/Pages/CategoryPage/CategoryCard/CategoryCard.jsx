import React, { useState, useEffect } from 'react'
import s from './CategoryCard.module.scss'
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, openCart } from '../../../../redux/cartSlice/cartSlice';

export const CategoryCard = ({ el }) => {
    const cartState = useSelector(state => state.cart.items)
    const [inCart, setInCart] = useState(false)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem(el))
    }

    const openCartHandler = () => {
        dispatch(openCart())
    }

    useEffect(() => {
        if (cartState) {
            setInCart(cartState.find(item => item.id === el.id))
        }
    }, [cartState, el.id])

    return (
        <NavLink to={`/product/${el.id}`} className={s.card}>
            <div className={s.bgImg}>
                {
                    inCart
                        ? <div
                            className={`${s.addBtn}  ${s.in}`}
                            onClick={(e) => {
                                e.preventDefault(e)
                                openCartHandler()
                            }
                            }
                        >
                            <BsCartCheck size={20} />

                        </div>
                        : <div
                            className={s.addBtn}
                            onClick={(e) => {
                                e.preventDefault(e)
                                addToCart()
                            }}>
                            <AiOutlinePlus />
                        </div>
                }
                <img src={el.url} alt='omgggg' />
            </div>
            <span className={s.text}>{el.name}</span>
            <div className={s.price}>
                {el.price}$ {el.isNew && <div>New Product</div>}
            </div>
        </NavLink>
    )
}
