class Converter {
    tablesRepository: TablesRepository

    constructor(tablesRepository: TablesRepository) {
        this.tablesRepository = tablesRepository;
    }

    convert(itemFrom: ItemValue, itemTo: ItemValue, year: Year): ConvertResult {
        const table = this.findTable(itemFrom.item, itemTo.item)
        if (table === undefined) return new NoTableConvertResult(itemFrom, itemTo, year);
        let value: Cost | undefined = table.rates.get(year)
        if (value === undefined) return new ErrorConvertResult(itemFrom, itemTo, year, "Incorrect year");
        if (table.itemA === itemTo.item && table.itemB === itemFrom.item) {
            value = 1/value;
        }
        return new SuccessConvertResult(itemFrom, itemTo, year, value);
    }

    private findTable(itemFrom: Item, itemTo: Item): Table | undefined {
        return this.tablesRepository.allTables.find((table) => {
            return (table.itemA === itemFrom && table.itemB === itemTo) || (table.itemA === itemTo && table.itemB === itemFrom)
        })
    }
}