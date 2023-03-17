import React, { useEffect, useState } from 'react'
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { data } from '../../../data/catalog.js'
import s from './ProdList.module.scss'


export const ProdList = ({ sliderPrice, sortBy, subCategories, setMaxPrice }) => {
    const [sorted, setSorted] = useState([]);
    useEffect(() => {
        setMaxPrice(Math.max(...data.map(el => el.price)))
    }, [])

    useEffect(() => {
        const sortingFn = (result) => {
            if (!sortBy) return
            console.log('reached sort fn');
            switch (sortBy) {
                case 'lth':
                    setSorted(result.sort((a, b) => a.price - b.price))
                    break;
                case 'htl':
                    setSorted(result.sort((a, b) => b.price - a.price))
                    break;
                case 'ssn':
                    setSorted(result.sort((a, b) => b.isNew - a.isNew))
                    break;

                default:
                    break;
            }
        }
        if (!sliderPrice) return
        const result = data?.filter(el => el.price >= sliderPrice[0] && el.price <= sliderPrice[1]);

        const maxPrice = data.map(el => el.price)
        if (maxPrice) {
            setMaxPrice(Math.max(...maxPrice))
        }

        if (!sortBy) return setSorted(result)

        sortingFn(result)
    }, [sortBy, sliderPrice, data, subCategories])

    useEffect(() => {
        if (!subCategories) return
        if (subCategories.length !== 0) {
            const result = data?.filter(el => el.price >= sliderPrice[0] && el.price <= sliderPrice[1]);

            const is = result.filter(el => subCategories.includes(el.subCategory))


            setSorted(is)
        }
    }, [subCategories])

    return (
        <div className={s.prodlist}>
            {
                sorted.map(el => <CategoryCard el={el} />)
            }
        </div>
    )
}
