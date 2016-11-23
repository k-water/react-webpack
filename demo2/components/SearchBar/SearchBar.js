import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }
    //添加反向数据流 调用handleChange方法，回到父组件，设置state，从而重新渲染页面，简单交互
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
