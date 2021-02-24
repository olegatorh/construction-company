import ProjectCard from "./cartProject";

function Projects() {
    return(
                <section className="pageProperties">
                    <div className="wrapper">
                        <div className={"intro_title"}>
                            <h1 className="intro_first_title">OUR</h1>
                            <h1 className="intro_second_title">PROJECTS</h1>
                            <hr/>
                        </div>
                        <ProjectCard/>
                    </div>
                </section>

    )
}

export default Projects