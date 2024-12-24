import { Year, Cost } from '../utils/Types'
import ItemValue from '../items/ItemValue'

class ConvertResult {
    itemFrom: ItemValue;
    itemTo: ItemValue;
    year: Year;
    constructor(itemFrom: ItemValue, itemTo: ItemValue, year: Year) {
        this.itemFrom = itemFrom;
        this.itemTo = itemTo;
        this.year = year;
    }
}
class SuccessConvertResult extends ConvertResult {
    result: Cost;

    constructor(itemFrom: ItemValue, itemTo: ItemValue, year: Year, result: Cost) {
        super(itemFrom, itemTo, year);
        this.result = result;
    }
}

class ErrorConvertResult extends ConvertResult {
    error: string;

    constructor(itemFrom: ItemValue, itemTo: ItemValue, year: Year, error: string) {
        super(itemFrom, itemTo, year);
        this.error = error;
    }
}

class NoTableConvertResult extends ConvertResult {

    constructor(itemFrom: ItemValue, itemTo: ItemValue, year: Year) {
        super(itemFrom, itemTo, year);
    }
}

export {ConvertResult, SuccessConvertResult, ErrorConvertResult, NoTableConvertResult}