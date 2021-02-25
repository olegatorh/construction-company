import React, { useState } from 'react';
import { dataForTest } from '../../dataForTesting';
import styles from "./mainContent.module.sass";
import right_arrow from "../../img/icons/right_arrow.png";
import left_arrow from "../../img/icons/left_arrow.png";

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = dataForTest.introSlider.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(dataForTest.introSlider) || dataForTest.introSlider.length <= 0) {
        return null;
    }

    return (
        <section className={styles.mainPage_intro_slider}>
            <div className={styles.mainPage_intro_text}>
                <h1 className={"first_title"}>PROJECT </h1>
                <h1 className={"second_title"}>PASICHNA</h1>
                <div className={`number_style ${styles.intro_numbers}`}>
                    <h1>0{current + 1}</h1>
                    <h1 className={"septum_style"}>/</h1>
                    <h1>0{dataForTest.introSlider.length}</h1>
                </div>
                <div>
                    <img src={left_arrow} className={"left_arrow"} onClick={prevSlide} alt="" />
                    <img src={right_arrow} className={'right-arrow'} onClick={nextSlide} alt="" />
                </div>
            </div>
            <div>
                {dataForTest.introSlider.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.img} alt='travel image' className={styles.image} />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ImageSlider;