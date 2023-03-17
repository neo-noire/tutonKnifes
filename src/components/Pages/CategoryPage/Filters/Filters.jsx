import React, { useEffect, useState } from 'react'
import { RangeInput } from '../RangeInput/RangeInput'
import c from './Filters.module.scss'

export const Filters = ({ maxPrice, data, setFilters }) => {
    const [categories, setCategories] = useState([])
    const [sortBy, setSortBy] = useState(null);
    const [subCategories, setSubCategories] = useState([])
    const [sliderPrice, setSliderPrice] = useState([0, 500])
   

    useEffect(() => {
        setCategories([...new Set(data.map(el => el.subCategory))])
    }, [data])

    useEffect(() => {
        setFilters({
            sortBy,
            subCategories,
            sliderPrice,
        })
    }, [sortBy, subCategories, sliderPrice])

    // const [maxPrice, setMaxPrice] = useState(100)



    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const isChecked = e.currentTarget.checked;

        setSubCategories(isChecked
            ? [...subCategories, value]
            : subCategories.filter(el => el !== value))
    }

    return (
        <div className={c.filters}>
            <div className={c.catFilter}>
                <h3 className={c.catTitle}>SubCat Type:</h3>
                <ul>
                    {
                        categories.map((el, idx) =>
                            <li> <label key={`${idx}-${el}`} className={c.chbx}><input value={el} type='checkbox' onChange={handleChange} />{el}</label></li>
                        )
                    }

                </ul>
            </div>
            <div className={c.catFilter}>
                <h3 className={c.catTitle}>Filter by Price</h3>
                <div className={c.slider}>
                    <RangeInput value={sliderPrice} setValue={setSliderPrice} maxPrice={maxPrice} />
                </div>
            </div>
            <div className={c.catFilter}>
                <h3 className={c.catTitle}>Sort by:</h3>
                <ul>
                    <li><label><input
                        type='radio'
                        name='sort'
                        value={'lth'}
                        onChange={(e) => setSortBy(e.target.value)}
                    />Price from low to high</label></li>
                    <li><label><input
                        type='radio'
                        name='sort'
                        value={'htl'}
                        onChange={(e) => setSortBy(e.target.value)}
                    />Price from high to low</label></li>
                    <li><label><input
                        type='radio'
                        name='sort'
                        value={'ssn'}
                        onChange={(e) => setSortBy(e.target.value)}
                    />New Season</label></li>
                </ul>
            </div>
        </div>
    )
}
