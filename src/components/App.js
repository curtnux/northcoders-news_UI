import React from 'react';

import NavBar from './NavBar';

class App extends React.Component {
  
  render () {
    return (
      <div className='container is-fluid'>
        <h3 className='title is-3'>Northcoders News</h3>
        <NavBar />
        {this.props.children}
        <footer className='footer'>FOOTER HERE</footer>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
