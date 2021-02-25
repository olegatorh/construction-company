import React, {Component} from "react";
import Slider from "react-slick";
import styles from "./mainContent.module.sass"
import {dataForTest} from "../../dataForTesting";

export default class MultipleRows extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            variableWidth: true,
        };
        return (
            <Slider {...settings}>
                {dataForTest.projects.map((item, index) =>
                    <div className={styles.our_project_slide} key={index}>
                        <img src={item.titleImg} className={styles.slider_images} alt="sliderMainPic"/>
                        <span className={styles.our_project_slide_text}>
                            {item.title}
                            <h2 className={styles.our_project_sub_title}>Double click on image to open detail information ↑</h2>
                        </span>
                    </div>)}
            </Slider>
        );
    }
}