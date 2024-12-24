import { Cost, Year } from '../utils/Types'
import { Item } from '../items/Item'

export default class Table {
    itemA: Item
    itemB: Item
    rates: Map<Year, Cost>
    yearFrom: Year
    yearTo: Year

    constructor(itemA: Item, itemB: Item, rates: Map<Year, number>) {
        this.itemA = itemA
        this.itemB = itemB
        this.rates = rates
        let minMaxKeys: [number, number] = this.getMinMaxKeys(rates)
        this.yearFrom = minMaxKeys[0]
        this.yearTo = minMaxKeys[1]
    }

    private getMinMaxKeys(map: Map<number, any>): [number, number] {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        
        for (const key of map.keys()) {
            if (key < min) {
            min = key;
            }
            if (key > max) {
            max = key;
            }
        }
        
        return [min, max];
    }
}