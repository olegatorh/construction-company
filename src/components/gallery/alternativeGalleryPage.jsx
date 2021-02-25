import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import right_arrow from "../../img/icons/right_arrow.png"
import left_arrow from "../../img/icons/left_arrow.png"
import {dataForTest} from "../../dataForTesting";
import styles from "./galleryPage.module.sass"


export default class AlternativeGalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 16,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        const slice = dataForTest.gallery.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map((pd, index) =>
            <div className={styles.project_item} key={index}>
                <img className={styles.project_title_image} src={pd.img} alt="projects must be here"/>
            </div>)

        this.setState({
            pageCount: Math.ceil(dataForTest.gallery.length / this.state.perPage),

            postData
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        window.scrollTo(0, 0)
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }

    render() {
        return (
            <>
                <div className={styles.gallery}>
                    {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={<img src={left_arrow} alt="" />}
                    nextLabel={<img src={right_arrow} alt="" />}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount }
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </>
        )
    }
}