import { SET_LINE_SELECTION } from 'actions/ui';

const initialState = {
  lineSelection: false
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case SET_LINE_SELECTION:
      return {
        ...state,
        lineSelection: action.lineSelection
      }
    default:
      return {
        ...state
      }
  }
}
