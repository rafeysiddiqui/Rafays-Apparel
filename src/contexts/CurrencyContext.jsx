import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('PKR');

  const conversionRates = {
    USD: 1,
    AUD: 1.45,
    CAD: 1.32,
    PKR: 280,
    AED: 3.67,
  };

  const currencySymbols = {
    USD: '$',
    AUD: 'A$',
    CAD: 'C$',
    PKR: '₨',
    AED: 'د.إ',
  };

  const convertPrice = (priceInUSD) => {
    const rate = conversionRates[currency];
    return priceInUSD * rate;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, currencySymbols }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
