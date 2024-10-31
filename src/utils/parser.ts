export const parseAmount = (amount: number, fixDecimals = false) => {
  const formattedNum = fixDecimals ? amount.toFixed(2) : Math.ceil(amount).toString();
  const [whole, decimal] = formattedNum.split(".");

  const wholeWithSpaces = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return decimal ? `${wholeWithSpaces}.${decimal}` : wholeWithSpaces;
}