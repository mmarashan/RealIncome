import React, { useState, FC } from 'react';

type GoldPrice = { [year: number]: number };

const yearToGoldPriceRub: GoldPrice = {
  2020: 3000,
  2021: 3500,
  2022: 4000,
  2023: 4500,
  2024: 5000,
};

export const Converter: FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [rubleAmount, setRubleAmount] = useState<string>("");
  const [goldAmount, setGoldAmount] = useState<string>("");

  function calculateGoldAmount() {
    const selectedYearPrice = yearToGoldPriceRub[selectedYear];
    if (selectedYearPrice) {
      const goldAmount = Number(rubleAmount) / selectedYearPrice;
      setGoldAmount(`${goldAmount.toFixed(2)} граммов`);
    } else {
      console.error("Некорректный год выбран");
    }
  }

  function onChangeYear(year: number) {
    setSelectedYear(year)
    calculateGoldAmount()
  }

  function onChangeRoubleAmount(rubleAmount: string) {
    setRubleAmount(rubleAmount)
    calculateGoldAmount()
  }

  return (
    <div>
      <h1>Конвертер рублей в золото</h1>

      {/* Первая половина страницы */}
      <p>Выберите год:</p>
      <select value={selectedYear} onChange={(e) => onChangeYear(Number(e.target.value))} >
        {Object.keys(yearToGoldPriceRub).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={rubleAmount}
        onChange={(e) => onChangeRoubleAmount(e.target.value)}
        placeholder="Введите сумму в рублях"
      />
      <br />
      Рублей: {rubleAmount}, Золота: {goldAmount}
    </div>
  );
}