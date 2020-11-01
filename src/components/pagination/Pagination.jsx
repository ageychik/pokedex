import React from 'react';

import ReactPaginate from 'react-paginate';

export default class Pagination extends React.Component {
    handlePageClick(page){
        let actPage = page.selected;
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
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        )
    }
}