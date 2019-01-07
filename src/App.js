import React, { Component } from 'react';
import './style/common.less'

class App extends Component {
  render() {
    return (
      <div>

          <React.Fragment>
              {this.props.children}
          </React.Fragment>

      </div>
    );
  }
}

export default App;
