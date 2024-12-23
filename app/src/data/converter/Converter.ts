class Converter {
    itemsRepository: ItemsRepository
    tablesRepository: TablesRepository

    constructor(itemsRepository: ItemsRepository, tablesRepository: TablesRepository) {
        this.itemsRepository = itemsRepository;
        this.tablesRepository = tablesRepository;
    }

    convert(itemFrom: ItemValue, itemTo: ItemValue): ConvertResult {
        const table = this.findTable(itemFrom.item, itemTo.item)
        // TODO
        return new SuccessConvertResult(itemFrom, itemTo, 100);
    }

    private findTable(itemFrom: Item, itemTo: Item): Table | undefined {
        return this.tablesRepository.allTables.find((table) => {
            return (table.itemA === itemFrom && table.itemB == itemTo) || (table.itemA === itemTo && table.itemB == itemFrom)
        })
    }
}