import React, {Component} from 'react';
import {ButtonToolbar, Button, MenuItem, DropdownButton} from 'react-bootstrap';

export default class Buttons extends Component {
  handleSelect = (evt) => {
    this.props.gridSize(evt)
  }

  render() {
    return (
      <div className="Buttons center">
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.props.play}>Play</Button>
          <Button bsStyle="warning" onClick={this.props.pause}>Pause</Button>
          <Button bsStyle="danger" onClick={this.props.clear}>Clear</Button>
          <Button bsStyle="default" onClick={this.props.slow}>Slow</Button>
          <Button bsStyle="default" onClick={this.props.fast}>Fast</Button>
          <Button bsStyle="primary" onClick={this.props.seed}>Seed</Button>
          <DropdownButton title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <MenuItem eventKey="1">20x10</MenuItem>
            <MenuItem eventKey="2">50x30</MenuItem>
            <MenuItem eventKey="3">70x50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}
