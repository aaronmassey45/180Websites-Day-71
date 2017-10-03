import React, {Component} from 'react';

import Navbar from './navbar';
import GameGrid from './grid';
import Buttons from './buttons';

export default class App extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generations: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  componentDidMount() {
    this.seed();
    this.start();
  }

  selectBox = (row, col) => {
    let {gridFull} = this.state;
    gridFull[row][col] = !gridFull[row][col];
    this.setState({ gridFull });
  }

  seed = () => {
    let {gridFull} = this.state;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        gridFull[i][j] = Math.random() < .15 ? true : false
      }
    }
    this.setState({
       gridFull,
       generations: 0
    });
  }

  play = () => {
    let {gridFull, generations} = this.state;
    let gridCopy = JSON.parse(JSON.stringify(gridFull));

    for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (gridFull[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (gridFull[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (gridFull[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (gridFull[i][j + 1]) count++;
		    if (j > 0) if (gridFull[i][j - 1]) count++;
		    if (i < this.rows - 1) if (gridFull[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (gridFull[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && this.cols - 1) if (gridFull[i + 1][j + 1]) count++;
		    if (gridFull[i][j] && (count < 2 || count > 3)) gridCopy[i][j] = false;
		    if (!gridFull[i][j] && count === 3) gridCopy[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: gridCopy,
		  generations: generations+1
		});
  }

  pause = () => {
    clearInterval(this.intervalID);
  }

  slow = () => {
    this.speed = 1000;
    this.start();
  }

  fast = () => {
    this.speed = 100;
    this.start();
  }

  clear = () => {
    clearInterval(this.intervalID);
    this.setState ({
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
      generations: 0
    })
  }

  gridSize = (size) => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }
    this.clear();
  }

  start = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.play, this.speed);
  }

  render() {
    let {gridFull, generations} = this.state;
    return(
      <div className='App text-center'>
        <Navbar brand='Game of Life' />
        <h1>The Game of Life</h1>
        <Buttons play={this.start}
          pause={this.pause}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <GameGrid gridFull={gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generation: {generations}</h2>
      </div>
    );
  }
}
