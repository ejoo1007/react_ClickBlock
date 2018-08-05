import React from 'react';
import Block from './Block';

class Ex2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
    };
  }

  render() {
    var p = [];
    for (let i = 0; i < 5; i++) {
      var x = [];
      for (let j = 0; j < 9; j++) {        
        let isOn = j === this.state.x && i === this.state.y;
        x.push(
          <Block
            key={`${i}x${j}`}
            on={isOn}
            onClick={this.handleClick.bind(this, i, j)}
          />
        );
      }
      p.push(<div key={'div' + i}>{x}</div>);
    }
    return <div>{p}</div>;
  }

  handleClick(i, j) {
    this.setState({ x: j, y: i });
  }
}

export default Ex2;
