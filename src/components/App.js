import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

class App extends React.Component {
  
  render () {
    return (
      <div className='container is-fluid'>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
