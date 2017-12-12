export const VISIBLE = 'VISIBLE';
export const HIDDEN = 'HIDDEN';
export const SET_LINE_SELECTION = 'SET_LINE_SELECTION';

export function setLineSelection(isVisible) {
  return {
    type: SET_LINE_SELECTION,
    lineSelection: isVisible
  }
}

export function showLineSelection() {
  return setLineSelection(VISIBLE);
}

export function hideLineSelection() {
  return setLineSelection(HIDDEN);
}
