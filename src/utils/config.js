const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g)
  .map(x => parseInt(x, 16))

export const colors = {
  primary: '#37474f',
  primaryLight: '#62727b',
  primaryDark: '#102027',
  secondary: '#69f0ae',
  secondaryLight: '#9fffe0',
  secondaryDark: '#2bbd7e',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#000000'
}

export const rgbColors = {
  primary: hexToRgb(colors.primary),
  primaryLight: hexToRgb(colors.primaryLight),
  primaryDark: hexToRgb(colors.primaryDark),
  secondary: hexToRgb(colors.secondary),
  secondaryLight: hexToRgb(colors.secondaryLight),
  secondaryDark: hexToRgb(colors.secondaryDark),
  textOnPrimary: hexToRgb(colors.textOnPrimary),
  textOnSecondary: hexToRgb(colors.textOnSecondary)
}



