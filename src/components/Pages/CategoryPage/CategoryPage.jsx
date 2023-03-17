import React, { useEffect, useRef, useState } from 'react'
import c from './CategoryPage.module.scss'
import { useParams } from 'react-router-dom';
import { data as catalog } from '../../data/catalog.js'
import { ProdList } from './ProdList/ProdList';
import { HeroBg } from '../../HeroBg/HeroBg';
import { Filters } from './Filters/Filters';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { FiltersMobile } from '../../Layout/FiltersMobile/FiltersMobile';


export const CategoryPage = () => {
    const firstRender = useRef(true)
    const isMobile = useMediaQuery("(min-width: 612px)")
    const catId = useParams().id
    const [filters, setFilters] = useState({})
    const [maxPrice, setMaxPrice] = useState(100)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <div className={c.container}  >
            <HeroBg >
                <div className={c.heroContent}>
                    <h1>House and Knifes {catId}</h1>
                    <span className={c.heroText}>
                        Exclusive technologies on guard
                        of cleanliness and comfort in your home
                    </span>
                </div>
            </HeroBg>
            <div className='wrapper'>
                <div className={c.category}>
                    <div className={c.heading}>
                        <h3 className={c.catName}>
                            {catId}
                            {
                                !isMobile &&
                                <FiltersMobile>

                                    <Filters
                                        maxPrice={maxPrice}
                                        data={catalog}
                                        setFilters={setFilters} />
                                </FiltersMobile>
                            }

                        </h3>
                    </div>
                    <div className={c.content}>

                        {
                            isMobile &&
                            <Filters
                                maxPrice={maxPrice}
                                data={catalog}
                                setFilters={setFilters} />
                        }



                        <div className={c.items}>
                            <ProdList
                                {...filters}
                                setMaxPrice={setMaxPrice}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
