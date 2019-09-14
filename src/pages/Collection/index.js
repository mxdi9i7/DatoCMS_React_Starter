import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { getItemsOfCollection } from '../../queries/item';

export default class CollectionPage extends Component {
  state = {
    items: [],
  };
  fetchAllItems = () => {
    this.props.apollo
      .query({ query: getItemsOfCollection, variables: { collection: this.props.location.pathname.split('/')[2] } })
      .then((resp) => {
        this.setState({
          items: resp.data.allItems,
        });
      });
  };
  componentDidMount = async () => {
    await this.fetchAllItems();
  };
  render() {
    return (
      <div>
        <h1>This is a Collection page</h1>
        {this.state.items.map((v, i) => (
          <div key={i} className='item-block'>
            <Link to={`/item/${v.id}`}>{v.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}
