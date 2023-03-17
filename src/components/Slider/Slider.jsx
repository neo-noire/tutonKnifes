import React, { useState } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

import s from './Slider.module.scss'
import { HeroSlide } from './HeroSlide/HeroSlide';

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        {
            title: "Exceptional quality without compromise",
            text: "Tuotown knives are the chef's main tool and the secret of culinary excellence.",
            url: "https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/tuotown/section-logo_zfufvg.png"
        },
        {
            title: "Best Knifes only in our shop",
            text: "Tuotown knives are the chef's main tool and the secret of culinary excellence.",
            url: "https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/tuotown/hero-logo_zlvn56.png"
        },
        {
            title: "Exceptional quality without compromise",
            text: "Tuotown knives are the chef's main tool and the secret of culinary excellence.",
            url: "https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/tuotown/section-logo_zfufvg.png"
        },
        {
            title: "Best Knifes only in our shop",
            text: "Tuotown knives are the chef's main tool and the secret of culinary excellence.",
            url: "https://res.cloudinary.com/dj8y8vspg/image/upload/v1678676152/portfolio/tuotown/hero-logo_zlvn56.png"
        },
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : prev => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : prev => prev + 1)
    }

    const goToSlide = (idx) => {
        setCurrentSlide(idx)
    }
    return (
        <section className={s.hero}>

            <div className={s.slider}>
                <div className={s.container}
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {data.map(el => <HeroSlide el={el} />)}
                </div>
                <div className={s.icons}>
                    <div className={s.icon} onClick={prevSlide}>
                        <RiArrowLeftSLine size={24} />
                    </div>
                    <div className={s.dots}>
                        {data.map((el, idx) =>
                            <div className={s.dot} key={idx} onClick={() => goToSlide(idx)}>
                                {
                                    currentSlide === idx
                                        ? <input
                                            checked={true}
                                            id={idx}
                                            type={'radio'}
                                            onClick={() => goToSlide(idx)} name={'slide'} />
                                        : <input
                                            id={idx}
                                            type={'radio'}
                                            onClick={() => goToSlide(idx)} name={'slide'} />
                                }
                                <label htmlFor={idx}></label>
                            </div>
                        )}
                    </div>
                    <div className={s.icon} onClick={nextSlide}>
                        <RiArrowRightSLine size={24} />
                    </div>
                </div>
            </div>
        </section>
    )
}
