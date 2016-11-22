import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    render() {
       return (
             <form>
                <input type="text" placeholder="Search..." />
                <p>
                  <input type="checkbox" />
                  {' '}
                  Only show products in stock
                </p>
            </form>
        )
    }
}
