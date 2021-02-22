import React, {Component} from "react";
import Slider from "react-slick";
import our_project_pic_1 from "../../img/our_project_pic_1.png"
import our_project_pic_2 from "../../img/our_project_pic_2.png"
import our_project_pic_3 from "../../img/our_project_pic_3.png"
import our_project_pic_5 from "../../img/our_project_pic_5.png"

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
                <div className={"our_project_slide"}>
                    <img src={our_project_pic_1} className={"our_project_pic"} alt="sliderMainPic"/>
                    <span className="our_project_slide_text">
                        pidaras tu Ebanui
                        <h2 className="our_project_sub_title">Double click on image to open detail information ↑</h2>
                    </span>
                </div>
                <div className={"our_project_slide"}>
                    <img src={our_project_pic_2} className={"our_project_pic"} alt="sliderMainPic"/>
                    <span className="our_project_slide_text">
                        pidaras tu Ebanui
                        <h2 className="our_project_sub_title">Double click on image to open detail information ↑</h2>
                    </span>
                </div>
                <div className={"our_project_slide"}>
                    <img src={our_project_pic_3} title={"chlenu"} className={"our_project_pic"} alt="sliderMainPic"/>
                    <span className="our_project_slide_text">
                        pidaras tu Ebanui
                        <h2 className="our_project_sub_title">Double click on image to open detail information ↑</h2>
                    </span>
                </div>
                <div className={"our_project_slide"}>
                    <img src={our_project_pic_5} className={"our_project_pic"} alt="sliderMainPic"/>
                    <span className="our_project_slide_text">
                        pidaras tu Ebanui
                        <h2 className="our_project_sub_title">Double click on image to open detail information ↑</h2>
                    </span>
                </div>

            </Slider>
        );
    }
}