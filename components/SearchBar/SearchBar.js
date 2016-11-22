import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
       return (
             <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                  <input type="checkbox" checked = {this.props.inStockOnly} />
                  {' '}
                  Only show products in stock
                </p>
            </form>
        )
    }
}
