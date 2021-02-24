import React, {Component} from "react";
import Slider from "react-slick";
import sliderMainPic from "../../img/Intro.png"
import next from "../../img/215112.jpg"
import styles from "./mainContent.module.sass"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3500,
            variableWidth: true,
            className: styles.slider
        };
        return (
                <Slider {...settings} >
                    <div>
                        <img src={sliderMainPic}  alt="sliderMainPic"/>
                    </div>
                    <div>
                        <img src={sliderMainPic} alt="sliderMainPic"/>
                    </div>
                    <div>
                        <img src={next} alt="sliderMainPic"/>
                    </div>
                </Slider>
        );
    }
}
