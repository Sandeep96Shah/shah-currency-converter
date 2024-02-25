import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_TmPgAd52KfJdlctwU4wOo1DeCOUoX3ofRux04QPw');


export async function convertCurrency(fromCurrency, toCurrency, units){
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = response?.data?.[toCurrency] ?? 0;

    return multiplier * units;
}