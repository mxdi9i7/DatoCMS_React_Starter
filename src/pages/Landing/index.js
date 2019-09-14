import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { getCollections } from '../../queries/collection';

export default class LandingPage extends Component {
  state = {
    collections: [],
  };
  fetchAllCollections = async () => {
    this.props.apollo.query({ query: getCollections }).then((resp) => {
      this.setState({
        collections: resp.data.allCollections,
      });
    });
  };
  componentDidMount = async () => {
    await this.fetchAllCollections();
  };
  render() {
    return (
      <div>
        <h1>This is a landing page</h1>
        {this.state.collections.map((v, i) => (
          <div key={i} className='collection-block'>
            <Link to={`/collection/${v.id}`}>{v.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}
