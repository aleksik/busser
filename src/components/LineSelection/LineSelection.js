import React from 'react';
import classNames from 'classnames';
import style from './LineSelection.styles';

class LineSelection extends React.Component {

  onSelect(e, line, selected) {
    e.preventDefault();
    if (selected === true) {
      this.props.onLineSelect(line);
    } else {
      this.props.onLineDeselect(line);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.selectedLines.length > 0 && this.props.onSubmit();
  }

  render() {
    const { availableLines, selectedLines } = this.props;
    return (
      <div className={this.props.className}>
        <div className="LineSelection">
          <div className="LineSelection-heading">
            <h1>Choose your lines</h1>
            <button
              disabled={selectedLines.length === 0}
              onClick={this.onSubmit.bind(this)}
            >
              OK
            </button>
          </div>
          <div className="LineSelection-lines">
            {availableLines.map(line => {
              const selected = selectedLines.indexOf(line) > -1;
              const classes = classNames('LineSelection-line', { 'selected': selected });
              return (
                <button 
                  key={line} 
                  className={classes}
                  onClick={e => this.onSelect(e, line, !selected)}
                >
                  {line}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default style(LineSelection);
