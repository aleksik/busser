import styled from 'styled-components';
import { colors, rgbColors } from 'utils/config';

export default App => styled(App)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(${rgbColors.primary.join(',')}, .8);

  .LineSelection {
    position: relative;
    background: #fff;
    width: 100%;
    max-width: 500px;
    max-height: 100%;
  }

  .LineSelection-heading {
    background: ${colors.secondaryDark};
    color: ${colors.textOnSecondary};
    margin: 0;
    font-size: 1.5em;
    padding: .5em;
    position: sticky;
    top: 0;
  }

  .LineSelection-lines {
    padding: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    button {
      font-size: 1em;
      font-family: 'Roboto', sans-serif;
      background-color: ${colors.primaryLight};
      color: ${colors.textOnPrimary};
      border: 0;
      width: 3em;
      height: 3em;
      margin: .5em;
      cursor: pointer;
      outline: none;

      &.selected {
        background: ${colors.secondary};
        color: ${colors.textOnSecondary};
        outline: none;
        font-weight: bold;
      }
    }

  }

`
