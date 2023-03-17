import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../../../Card/Card'
import s from './ProductsMain.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { data as products } from '../../../data/catalog.js'

export const ProductsMain = ({ isMobile, filter, url }) => {
    const [data, setData] = useState([])

    //here can be fn to fetch data by filter value
    // const data = useFetch('http://getingsomedata.com?filter=[category][filter]')


    useEffect(() => {
        if (!filter) return
        const array = products.filter(el => el.category === filter)
        setData(array)
    }, [filter])

    return (
        <div className='wrapper'>
            <div className={s.products}>
                {isMobile &&
                    <div className={s.category}>
                        <img src={url[0].url} />
                        <NavLink to={`/category/${filter}`} className={s.link}>
                            <div className={s.text}>
                                <span>
                                    Explore the TUOTOWN Knife Collection
                                </span>
                                <AiOutlineArrowRight />
                            </div>

                        </NavLink>
                    </div>
                }
                {data && data.map(el => <Card key={el.id} el={el} />)}
            </div>
        </div>
    )
}
