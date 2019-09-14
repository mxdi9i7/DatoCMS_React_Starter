import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/Normalize.css';
import './styles/Global.css';
import './styles/Grid.css';
import { ApolloConsumer } from 'react-apollo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import LandingPage from './pages/Landing';
import ItemPage from './pages/Item';
import CollectionPage from './pages/Collection';

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloConsumer>
          {(client) => {
            return (
              <div>
                <Navbar />
                <Route exact path='/' render={(routeProps) => <LandingPage {...routeProps} apollo={client} />} />
                <Route
                  exact
                  path='/collection/:id'
                  render={(routeProps) => <CollectionPage {...routeProps} apollo={client} />}
                />
                <Route exact path='/item/:id' render={(routeProps) => <ItemPage {...routeProps} apollo={client} />} />
                <Footer apollo={client} />
              </div>
            );
          }}
        </ApolloConsumer>
      </Router>
    );
  }
}

export default App;
