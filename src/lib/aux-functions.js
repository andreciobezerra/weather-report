export const convertToCelsius = (k) => parseFloat(k) - 273.15;

export const convertToFahrenheit = (k) => (convertToCelsius(k) * 9 / 5) + 32;

export const range = (start, end) => new Array(end-start+1).fill(0).map((elem,i) => elem=i+start);