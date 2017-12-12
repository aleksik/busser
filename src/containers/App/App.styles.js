import styled from 'styled-components';

export default App => styled(App)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .Map {
    flex-grow: 1;
  }
`