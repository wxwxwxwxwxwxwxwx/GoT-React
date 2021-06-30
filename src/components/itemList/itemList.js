import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                });
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const label = this.props.renderItem(item)

            return (
                <li
                    key={i} 
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + i)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}