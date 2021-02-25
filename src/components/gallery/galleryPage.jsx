import GallerySlider from "./alternativeGallery/gallerySlider";
import styles from "./galleryPage.module.sass"
import AlternativeGalleryPage from "./alternativeGalleryPage";

function Gallery() {
    return (
        <section className={"pageProperties"}>
            <div className="wrapper">
                <div className={"intro_title"}>
                    <h1 className={"intro_first_title"}>PHOTO</h1>
                    <h1 className={"intro_second_title"}>GALLERY</h1>
                    <hr/>
                </div>
                <AlternativeGalleryPage/>
            </div>
        </section>
    )
}

export default Gallery