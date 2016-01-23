import React from 'react';
import PaginationItem from './PaginationItem';

class Pagination extends React.Component {
    constructor() {
        super();
        this.pagesTotal = 0; // itemsTotal / itemsPerPage
        this.currentPage = 1;
    }

    componentWillReceiveProps(nextProps) {
        var pagesTotalFloat = parseInt(nextProps.itemsTotal, 10) / parseInt(nextProps.itemsPerPage, 10);
        if (pagesTotalFloat % 1) {
            pagesTotalFloat = parseInt(pagesTotalFloat, 10) + 1;
        }
        this.pagesTotal = pagesTotalFloat;
    }

    render() {
        var navItems = [];

        if (this.currentPage > 1 && this.pagesTotal > 1) {
            navItems.push(<PaginationItem type="previous" key={i} />);
        }
        for (var i = 0; i < this.pagesTotal; i++) {
            navItems.push(<PaginationItem type="number" number={i + 1} key={i} />);
        }
        if (this.currentPage < this.pagesTotal && this.pagesTotal > 1) {
            navItems.push(<PaginationItem type="next" key={i} />);
        }

        return <nav>
            <ul className="pagination">
                {navItems}
            </ul>
        </nav>
    }
}

Pagination.propTypes = {
    itemsPerPage: React.PropTypes.number,
    itemsTotal: React.PropTypes.number
}

Pagination.defaultProps = {
    itemsPerPage: 10,
    itemsTotal: 0
}

export default Pagination;
