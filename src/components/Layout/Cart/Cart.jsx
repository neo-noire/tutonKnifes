import React from 'react'
import s from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { closeCart, deleteItem, reset } from '../../../redux/cartSlice/cartSlice';
import cart from './cartTransition.module.scss'
import { CSSTransition } from 'react-transition-group'


export const Cart = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.cart.isOpen)
    const cartState = useSelector(state => state.cart?.items)


    //count total price
    const totalPrice = () => {
        let total = cartState?.reduce((acc, curr) => acc += (Number(curr.price) * curr.quantity), 0)
        return total.toFixed(2)
    }

    const handleDelete = (el) => {
        dispatch(deleteItem(el))
    }

    const resetCart = () => {
        dispatch(reset())
    }

    const closeCartHandler = () => {
        dispatch(closeCart())
    }

    // const stripePromise = loadStripe('pk_test_51MhD15B0niWLCqAgQGZDnkmH9SbRiwnrLNzgfNijjyanaSCzlfzcjKet2cgV0lbzXoLsjwLxR7AjuYIWBFf8QAPR00ItOrFJHV');
    //payment by strapi service
    // const handlePayment = async () => {

    //     try {
    //         const stripe = await stripePromise;

    //         const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders`, cartState)
    //         debugger
    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id
    //         })
    //         debugger
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <CSSTransition
            in={isOpen}
            timeout={500}
            classNames={cart}
            mountOnEnter
            unmountOnExit
        >
            <div className={s.wrapper} onClick={() => {
                closeCartHandler()
            }}>
                <div className={s.cart} onClick={e => e.stopPropagation()}>
                    <div className={s.exit}>
                        <button onClick={closeCartHandler}>X</button>
                    </div>
                    <h2 className={s.title}>Products in cart :</h2>
                    <div className={s.items}>
                        {
                            cartState.length !== 0 ? cartState.map((el, pos) => <div key={el.id}
                                className={s.item}>
                                <div className={s.left}><img src={el.url} alt={el.name} /></div>
                                <div className={s.center}>
                                    <h3>{el.name}</h3>
                                    <span>{el.quantity} x {el.price}</span>
                                </div>
                                <button
                                    onClick={() => handleDelete(el.id)}
                                    className={s.right}>
                                    <RiDeleteBin2Line size={24} />
                                </button>
                            </div>) : <div>
                                Cart is empty
                            </div>
                        }
                    </div>
                    <div className={s.subtotal}>
                        <h2>SUBTOTaL</h2>
                        <span>$ {totalPrice()}</span>
                    </div>
                    <button className={s.btn}>Proceed to checkout</button>
                    <button
                        onClick={resetCart}
                        className={s.reset}>Reset Cart</button>
                </div>
            </div>
        </CSSTransition>
    )
}
