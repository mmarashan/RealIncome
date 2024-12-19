class ItemValue {
    item: Item
    value: number

    constructor(item: Item, value: number) {
        this.item = item
        this.value = value  
    }
}

class Converter {

    constructor() {
        this.rates = {
            rub: {
                squareMeters: 0,
                bigMacs: 0,
                ouncesOfGold: 0
            },
            usd: {
                squareMeters: 0,
                bigMacs: 0,
                ouncesOfGold: 0
            }
        };
    }

    setRate(currency, type, value) {
        if (currency in this.rates) {
            if (type in this.rates[currency]) {
                this.rates[currency][type] = value;
            } else {
                throw new Error(`Неизвестный тип ${type}`);
            }
        } else {
            throw new Error(`${currency} не поддерживается`);
        }
    }

    convert(amount, currency, type) {
        const rate = this.rates[currency];
        if (!rate) {
            return `Ошибка: валюта ${currency} не найдена`;
        }
        if (!(type in rate)) {
            return `Ошибка: тип ${type} не найден для валюты ${currency}`;
        }
      
        return `${amount} ${currency.toUpperCase()} равно ${amount * rate[type]} ${type.toLowerCase()}`;
    }
}