export function currencyFormat(num) {
  console.log(num, "num");
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}