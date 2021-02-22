import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../../img/Projects gallery/Rectangle 23.png"
import slide2 from "../../img/Projects gallery/Rectangle 24.png"
import slide3 from "../../img/Projects gallery/Rectangle 25.png"
import slide4 from "../../img/Projects gallery/Rectangle 26.png"
import slide5 from "../../img/Projects gallery/Rectangle 27.png"
import slide6 from "../../img/Projects gallery/Rectangle 28.png"
import slide7 from "../../img/Projects gallery/Rectangle 29.png"
import slide8 from "../../img/Projects gallery/Rectangle 30.png"
import right_arrow from "../../img/icons/right_arrow.png"
import left_arrow from "../../img/icons/left_arrow.png"
import styles from "./gallerySlider.module.scss"


export default class GallerySlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            rows: 2,
            arrows: false,
            slidesPerRow: 4,
            className: styles.gallerySlider,
            variableWidth: true,
        };
        return (
            <>
                <Slider {...settings}>
                    <div className={styles.slide}>
                        <img src={slide1} alt="sliderMainPic"/>
                    </div>
                    <div className={styles.slide}>
                        <img src={slide2} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide3} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide4} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide5} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide6} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide7} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide8} alt="sliderMainPic"/>
                    </div>
                    <div className={styles.slide}>
                        <img src={slide1} alt="sliderMainPic"/>
                    </div>
                    <div className={styles.slide}>
                        <img src={slide2} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide3} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide4} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide5} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide6} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide7} alt="sliderMainPic"/>

                    </div>
                    <div className={styles.slide}>
                        <img src={slide8} alt="sliderMainPic"/>
                    </div>
                    <div className={styles.slide}>
                        <img src={slide1} alt="sliderMainPic"/>
                    </div>
                    
                </Slider>
                <div className={styles.gallerySliderControlls}>
                    <div className={styles.slide_number}>
                        <h1 className="intro_title_fist_number">01</h1>
                        <h1 className="intro_title_septum">/</h1>
                        <h1 className="intro_title_last_number">03</h1>
                    </div>
                    <div className="slider_arrows">
                        <img src={left_arrow} alt="left"/>
                        <img src={right_arrow} alt="right"/>
                    </div>
                </div>
            </>
        );
    }
}