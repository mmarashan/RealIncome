class ConvertResult {
    itemFrom: ItemValue;
    itemTo: ItemValue;    
    constructor(itemFrom: ItemValue, itemTo: ItemValue) {
        this.itemFrom = itemFrom;
        this.itemTo = itemTo;
    }
}
class SuccessConvertResult extends ConvertResult {
    result: number;

    constructor(itemFrom: ItemValue, itemTo: ItemValue, result: number) {
        super(itemFrom, itemTo);
        this.result = result;
    }
}
class ErrorConvertResult extends ConvertResult {
    error: string;

    constructor(itemFrom: ItemValue, itemTo: ItemValue, error: string) {
        super(itemFrom, itemTo);
        this.error = error;
    }
}