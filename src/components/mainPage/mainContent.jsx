import SimpleSlider from "../sliders/intro_slider";
import arrow from "../../img/arrow-2-right-long.png";
import about_company_images1 from "../../img/Rectangle 8.png";
import about_company_images2 from "../../img/Rectangle 9.png";
import MultipleRows from "../sliders/our_project_slider";
import {ContactWithUs} from "../contact with ass/contact_with_us";
import call_back from "../../img/call_back.png";

function MainContent() {
    return(
        <>
            <section className="intro">
                <div className="wrapper">
                    <div className="intro_title">
                        <h1 className="intro_first_title">PROJECT </h1>
                        <h1 className="intro_second_title">PASICHNA</h1>
                        <div className="slide_number">
                            <h1 className="intro_title_fist_number">01</h1>
                            <h1 className="intro_title_septum">/</h1>
                            <h1 className="intro_title_last_number">03</h1>
                        </div>
                    </div>
                    <div className="intro_slider">
                        <SimpleSlider/>
                    </div>
                </div>
            </section>
            <section className="about_company">
                <div className="wrapper">
                    <div className="about_company_part_one">
                        <h2 className="about_company_title">
                            About Company
                        </h2>
                        <h2 className="about_Company_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </h2>
                        <div className="learn_more">
                            <h1 className="learn_more_text">
                                Learn more
                            </h1>
                            <img src={arrow} alt="learn more" className="learn_more_arrow"/>
                        </div>
                    </div>
                    <div className="about_company_part_two">
                        <img src={about_company_images1} alt="learn more" className="learn_more_image"/>
                        <img src={about_company_images2} alt="learn more" className="learn_more_image"/>
                    </div>
                </div>
            </section>
            <section className="main_tasks">
                <div className="wrapper">
                    <div className="main_tasks_items">
                        <h1 className="main_tasks_title">Main Tasks</h1>
                        <div className="main_tasks_first_task">
                            <h1 className="main_tasks_number">1</h1>
                            <h2 className="main_tasks_text">
                                en book. It has survived
                                not only five centuries,
                                but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                            </h2>
                        </div>
                        <div className="main_tasks_second_task">
                            <h1 className="main_tasks_number">2</h1>
                            <h2 className="main_tasks_text">
                                en book. It has survived
                                not only five centuries,
                                but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our_projects">
                <div className="wrapper">
                    <div className="projects_title">
                        <h1 className="our_projects_title">
                            Our Projects
                        </h1>
                        <div className="projects_title_all_projects">
                            All Projects →
                        </div>
                    </div>
                    <div className="our_projects_slider" title={" Double click to open detail information"}>
                        <MultipleRows/>
                    </div>
                </div>
            </section>
            <section className="call_back">
                <div className="wrapper">
                    <h1 className="call_back_title">
                        how to contact with us
                    </h1>
                    <div className="call_back_items">
                        <ContactWithUs/>
                        <img src={call_back} alt={"we call u babe"}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainContent