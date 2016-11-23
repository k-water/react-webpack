import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    }
    render() {
       return (
             <form>
                <input type="text" placeholder="Search..." ref="filterTextInput" onChange={this.handleChange.bind(this)} defaultValue={this.props.filterText} />
                <p>
                  <input type="checkbox" ref="inStockOnlyInput" onChange={this.handleChange.bind(this)} checked={this.props.inStockOnly} />
                  {' '}
                  Only show products in stock
                </p>
            </form>
        )
    }
}
