import React from 'react';
import ReactJson from 'react-json-view';
import './history.scss';

class Results extends React.Component {
  render() {
    return (
      <>
        {!this.props.headers ? '' : <div>Headers: {this.props.headers} </div>}
        {!this.props.count ? '' : <div data-testid='count'>Count: {this.props.count}</div>}
        {!this.props.results ? (
          ''
        ) : (
          <div class='historyBox'>
            <ReactJson src={this.props.results} />
          </div>
        )}
      </>
    );
  }
}

export default Results;