import React from 'react';

import ReactPaginate from 'react-paginate';

export default class Pagination extends React.Component {
    handlePageClick(page){
        let actPage = page.selected;
        const settings = {
            maxToPage: this.props.pageSize,
            page: actPage,
            total: this.props.total,
            pageSize: (actPage + 1) * this.props.pageSize < this.props.total
                    ? this.props.pageSize
                    : this.props.total - actPage * this.props.pageSize
        };
        this.props.click(settings);
    }
    render() {
        const { pageSize, total } = this.props;
        let pageCount = total / pageSize;
        return (
            <ReactPaginate
                previousLabel={'«'}
                nextLabel={'»'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick.bind(this)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        )
    }
}