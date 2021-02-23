import GallerySlider from "./gallerySlider";
import styles from "./galleryPage.module.sass"
import AlternativeGalleryPage from "./alternativeGallery/alternativeGalleryPage";
function Gallery() {
    return(
        <>
            <section className={"pageProperties"}>
                <div className="wrapper">
                    <h1 className={"intro_first_title"}>PHOTO</h1>
                    <h1 className={"intro_second_title"}>GALLERY</h1>
                    <hr/>
                        <AlternativeGalleryPage/>
                </div>
            </section>
        </>

    )
}

export default Gallery