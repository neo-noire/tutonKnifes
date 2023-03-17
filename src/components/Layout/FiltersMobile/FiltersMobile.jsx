import React from 'react'
import s from './FiltersMobile.module.scss'
import { CiFilter } from 'react-icons/ci'

export const FiltersMobile = ({ children }) => {
    return (
        <details className={s.filtersMobile}>
            <summary
                className={s.filterButton}>
                <CiFilter size={16} />

            </summary>
            <div className={s.filters}>
                {children}
            </div>
        </details>
    )
}
