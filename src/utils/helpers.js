export const addToArrayUnique = (array, itemToAdd) => {
  const newArray = array.slice();
  if (newArray.indexOf(itemToAdd) === -1) {
    newArray.push(itemToAdd);
  }
  return newArray;
}

export const removeFromArray = (array, itemToRemove) => (
  array.filter(item => item !== itemToRemove)
);
