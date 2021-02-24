import React, { useState } from 'react';
import { dataForTest } from '../../dataForTesting';

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
        <section className='slider'>
            <div className='left-arrow' onClick={prevSlide} >left</div>
            <div className='right-arrow' onClick={nextSlide} >right</div>
            {dataForTest.introSlider.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.img} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;