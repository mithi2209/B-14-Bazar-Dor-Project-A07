

// export function formatBanglaNumber(value: number) {
//   return new Intl.NumberFormat("bn-BD").format(value);
// }

export function formatBangla(number: number | undefined) {
  if (number === undefined || number === null) {
    return "০";
  }

  return number.toLocaleString("bn-BD");
}