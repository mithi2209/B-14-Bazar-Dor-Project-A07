

// export function formatBanglaNumber(value: number) {
//   return new Intl.NumberFormat("bn-BD").format(value);
// }


export function formatBangla(number: number) {
  return number.toLocaleString("bn-BD");
}