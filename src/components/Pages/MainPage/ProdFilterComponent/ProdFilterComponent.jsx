import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'
import { FilterProducts } from '../FilterProducts/FilterProducts'
import { ProductsMain } from '../ProductsMain/ProductsMain'

export const ProdFilterComponent = () => {
    const isMobile = useMediaQuery("(min-width: 612px)")
    const [filter, setFilter] = useState('kitchen')
    const [url, setUrl] = useState('')
    const categories = [
        {
            name: 'kitchen',
            url: 'https://res.cloudinary.com/dj8y8vspg/image/upload/v1678725580/portfolio/tuotown/knifes/Rectangle_33_wagetg.png'
        },
        {
            name: 'Folding',
            url: 'https://media.istockphoto.com/id/1335305187/photo/folding-pocket-knife-with-wooden-handle-a-small-knife-on-a-wooden-surface.jpg?s=612x612&w=0&k=20&c=nzuR_fuJ8jDY_GFJsocA1HDaoOnEb4k7-2vo0va6CqM='
        },
        {
            name: 'Sharpener',
            url: 'https://media.istockphoto.com/id/1134233852/photo/closeup-of-male-chef-hands-sharpen-a-big-chefs-knife.jpg?s=612x612&w=0&k=20&c=rP4qLleaLX8jSeGTh-0jAwXKTJNTykRH8yvLUxDQ-L4='
        },
        {
            name: 'Accessories',
            url: 'https://www.all-clad.com/media/catalog/category/Kitchen_Accessories_Mobile.jpg'
        }
    ]

    useEffect(() => {
        if (filter) {
            setUrl(categories.filter(el => el.name === filter))
        }
    }, [filter])

    return (
        <div>
            <FilterProducts setFilter={setFilter} />
            <ProductsMain isMobile={isMobile} filter={filter} url={url} />
        </div>
    )
}
