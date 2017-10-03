import React, {Component} from 'react';

import Box from './box';

export default class GameGrid extends Component {
  render() {
    const width = this.props.cols * 14;
    let rowsArr = [];

    let boxClass = '';
    //can be done with .map()
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxId = `${i}_${j}`;
        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
           />
        );
      }
    }
    return (
      <div className="Grid" style={{ width: width }}>
        {rowsArr}
      </div>
    )
  }
}
