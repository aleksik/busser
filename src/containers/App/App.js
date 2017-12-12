import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.styles.js';
import Map from 'components/Map';
import LineSelection from 'components/LineSelection';

import { selectLine, deselectLine } from 'actions/lines';
import { showLineSelection, hideLineSelection, VISIBLE } from 'actions/ui';

class App extends Component {

  async componentDidMount() {
    this.props.showLineSelection(true);
  }


  render() {
    const { lines, ui } = this.props;
    return (
      <div className={this.props.className}>
        <Map 
          className="Map"
        />
        {
          ui.lineSelection === VISIBLE ? (
            <LineSelection 
              availableLines={lines.available} 
              selectedLines={lines.selected}
              onLineSelect={this.props.selectLine}
              onLineDeselect={this.props.deselectLine}
              onSubmit={this.props.hideLineSelection}
            />
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lines: state.lines,
  ui: state.ui
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectLine,
    deselectLine,
    showLineSelection,
    hideLineSelection
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(style(App));
