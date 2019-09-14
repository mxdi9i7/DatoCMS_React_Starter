import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { getItem } from '../../queries/item';

export default class ItemPage extends Component {
  state = {
    item: {
      collection: {},
    },
  };
  fetchAllItems = () => {
    this.props.apollo
      .query({ query: getItem, variables: { id: this.props.location.pathname.split('/')[2] } })
      .then((resp) => {
        this.setState({
          item: resp.data.item,
        });
      });
  };
  componentDidMount = async () => {
    await this.fetchAllItems();
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>This is a Item page</h1>

        {item && (
          <div className='item-block'>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <h3>
              This item is a collection of <Link to={`/collection/${item.collection.id}`}>{item.collection.title}</Link>
            </h3>
          </div>
        )}
      </div>
    );
  }
}
