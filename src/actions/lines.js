export const SELECT_LINE = 'SELECT_LINE';
export const DESELECT_LINE = 'DESELECT_LINE';

export function selectLine(line) {
  return {
    type: SELECT_LINE,
    line
  }
}

export function deselectLine(line) {
  return {
    type: DESELECT_LINE,
    line
  }
}
