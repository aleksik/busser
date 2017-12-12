import availableLines from 'utils/lines';
import { SELECT_LINE, DESELECT_LINE } from 'actions/lines';
import { addToArrayUnique, removeFromArray } from 'utils/helpers';

const initialState = {
  available: availableLines,
  selected: []
}

export default function lines(state = initialState, action) {
  switch (action.type) {

    case SELECT_LINE:
      return {
        ...state,
        selected: addToArrayUnique(state.selected, action.line)
      }
    
    case DESELECT_LINE:
      return {
        ...state,
        selected: removeFromArray(state.selected, action.line)
      }
  
    default:
      return {
        ...state
      }
  }
}
