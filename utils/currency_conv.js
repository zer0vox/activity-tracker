const CurrencyConverter = require("currency-converter-lt");

// Function to convert currency
async function convertCurrency(amount, fromCurrency, toCurrency) {
  const currencyConverter = new CurrencyConverter();

  try {
    const result = await currencyConverter
      .from(fromCurrency)
      .to(toCurrency)
      .amount(amount)
      .convert();
    console.log(
      `${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`
    );
  } catch (error) {
    console.error("Error converting currency:", error);
  }
}

module.exports = { convertCurrency };
