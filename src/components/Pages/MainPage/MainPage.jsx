import React from 'react'
import s from './MainPage.module.scss'
import { Slider } from '../../Slider/Slider'
import { FeaturedProducts } from './NewAndPopular/FeaturedProducts'
import { AboutTuton } from './AboutTuton/AboutTuton'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { ProdFilterComponent } from './ProdFilterComponent/ProdFilterComponent'


export const MainPage = () => {
  window.scrollTo(0, 0)
  const isMobile = useMediaQuery("(min-width: 612px)")
  return (
    <main className={s.main}>
      <Slider />
      <ProdFilterComponent />
      <FeaturedProducts />
      {
        isMobile && <AboutTuton />
      }
    </main>
  )
}
