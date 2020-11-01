import React from 'react';

import ReactPaginate from 'react-paginate';

export default class Pagination extends React.Component {
    handlePageClick(page){
        console.log(page.selected, this.props.total, this.props.page)
        let actPage = page.selected;
        console.log(actPage)
        this.props.click({page: actPage, total: this.props.total, pageSize: this.props.pageSize});
    }
    render() {
        const {page, pageSize, total, click} = this.props;
        let pageCount = total / pageSize;
        return (
            <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        )
    }
}