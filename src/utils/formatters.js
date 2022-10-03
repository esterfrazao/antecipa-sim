export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const inputCurrencyFormatter = (value, setValue) => {
  if (value.length > 2) {
    value = value.slice(0, -2) + "." + value.slice(-2);
  } else if (value.length === 2) {
    value = "0." + value;
  } else {
    value = "0.0" + value;
  }
  const number = Number(value);

  setValue(currencyFormatter.format(number));
};
