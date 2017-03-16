import React from 'react';

import NavBar from './NavBar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <h3 className='title is-3'>All Articles</h3>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default App;
