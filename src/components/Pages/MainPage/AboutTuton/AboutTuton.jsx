import React from 'react'
import s from './AboutTuton.module.scss'

export const AboutTuton = () => {
    return (
        <section className='wrapper'>
            <div className={s.about}>
                <div className={s.top}>
                    <div className={s.img}>
                        <img src={'https://res.cloudinary.com/dj8y8vspg/image/upload/v1678732118/portfolio/tuotown/Rectangle_36_vbwebo.png'} />
                    </div>
                    <div className={s.info}>
                        <h2 className={s.title}>
                            «Tuotown» - legendary knives that create masterpieces
                        </h2>
                        <p className={s.text}>
                            «Tuotown» is the exclusive representative of professional kitchen knives made by
                            the best craftsmen in East Asia using advanced European equipment and modern materials.
                            They have perfect balance and fantastic sharpness. They combine centuries-old traditions
                            and the latest developments. We also offer a wide range of related products.
                        </p>
                    </div>
                </div>
                <div className={s.bottom}>
                    <div className={s.info}>
                        <p className={s.text}>
                            The true beauty of a knife is its perfect functionality and visual harmony. This item
                            has accompanied man since ancient times: from the dawn of civilization to the present day. Throughout
                            history of mankind, he was a faithful assistant, an indispensable tool and a formidable weapon.
                            We offer Hi-end quality products at affordable prices to true connoisseurs of Japanese knives.
                        </p>
                        <p className={s.text}>
                            A distinctive feature of our online store are unique sales offers, product exclusivity,
                            consistently high quality and favorable prices. We sell elite Japanese kitchen knives for
                            professionals and amateurs. An extensive product line includes products for various needs
                            and any budget - from cutlery to chef knives.
                        </p>
                        <h2 className={s.title}>
                            «Tuotown» knives are the main tool of chefs and the secret of culinary excellence
                        </h2>

                    </div>
                    <div className={s.img}>
                        <img src={'https://res.cloudinary.com/dj8y8vspg/image/upload/v1678741401/portfolio/tuotown/Rectangle_39_nnzlrn.png'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
    