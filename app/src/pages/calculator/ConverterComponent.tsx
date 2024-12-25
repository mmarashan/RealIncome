import React, { useState, FC } from 'react';
import TablesRepository from '../../data/table/TablesRepository'
import ItemsRepository from '../../data/items/ItemsRepository'
import Converter from '../../data/converter/Converter'
import ItemValue from '../../data/items/ItemValue'
import { SuccessConvertResult } from '../../data/converter/ConvertResult'

const Years = [2022, 2023, 2024]

export const ConverterComponent: FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [rubleAmount, setRubleAmount] = useState<string>("");
  const [goldAmount, setGoldAmount] = useState<string>("");

  const tablesRepository = new TablesRepository();
  const converter: Converter = new Converter(tablesRepository);

  function calculateGoldAmount() {

    const convertResult = converter.convert(
      new ItemValue(ItemsRepository.Rouble, Number(rubleAmount)), 
      new ItemValue(ItemsRepository.COLD, 0),
      selectedYear
    )

    if (convertResult instanceof SuccessConvertResult) {
      setGoldAmount(`${convertResult.result.toFixed(2)} граммов`);
    } else {
      console.error("Что-то не то");
      console.error(convertResult);
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
        {Years.map((year) => (
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