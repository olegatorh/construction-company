import GallerySlider from "./gallerySlider";

function Gallery() {
    return(
        <>
            <section className="intro">
                <div className="wrapper">
                    <h1 className="intro_first_title">PHOTO</h1>
                    <h1 className="intro_second_title">GALLERY</h1>
                    <hr/>
                    <GallerySlider/>
                </div>
            </section>
        </>

    )
}

export default Gallery