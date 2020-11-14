import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      text: 'mingxin'
    }));
  }

  render() {
    return (
      <div className="test-class"
        ref={(input) => { this.textInput = input; }}
        onClick={this.handleClick}>
        {this.state.text}
      </div>
    );
  }
}
