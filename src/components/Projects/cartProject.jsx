import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import styles from "./projectPages.module.css";
import arrow from "../../img/arrow-2-right-long.png";
import {dataForTest} from "../../dataForTesting";
import right_arrow from "../../img/icons/right_arrow.png"
import left_arrow from "../../img/icons/left_arrow.png"


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
                const slice = dataForTest.projects.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map((pd, index) => <div className={styles.projects_wrapper} key={index}>
                    <div className={styles.project_item}>
                        <img className={styles.project_title_image} src={pd.titleImg} alt="project image must be here"/>
                        <div className={styles.project_short_description}>
                            <h1 className={styles.project_title}>{pd.title}</h1>
                            <span>{pd.short_description}</span>
                            <div className={styles.learn_more}>
                                <h1 className="learn_more_text">
                                    Learn more
                                </h1>
                                <img src={arrow} alt="learn more" className="learn_more_arrow"/>
                            </div>
                        </div>
                    </div>
                </div>)

                this.setState({
                    pageCount: Math.ceil(dataForTest.projects.length / this.state.perPage),

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
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={<img src={left_arrow} alt=""/>}
                    nextLabel={<img src={right_arrow} alt=""/>}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={styles.pagination}
                    subContainerClassName={"pages pagination"}
                    activeClassName={styles.active}/>
            </div>

        )
    }
}