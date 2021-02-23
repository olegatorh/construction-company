import React, {Component} from "react";
import Slider from "react-slick";

import right_arrow from "../../img/icons/right_arrow.png"
import left_arrow from "../../img/icons/left_arrow.png"
import styles from "./galleryPage.module.sass"
import {dataForTest} from "../../dataForTesting";


export default class GallerySlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            rows: 2,
            slidesPerRow: 4,
            className: styles.gallerySlider,
            dots: true,
            arrows: false,
            appendDots: dots => (
                <div
                    style={{
                    }}
                >
                    <ul> {dots} </ul>
                </div>
            ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                }}
            >
                {i + 1}
            </div>
        )
    };


        return (
            <>
                <Slider {...settings}>
                    {dataForTest.gallery.map((item, index) =>
                            <img src={item.img} alt="sliderMainPic"/>
                        )}
                </Slider>

            </>
        );
    }
}