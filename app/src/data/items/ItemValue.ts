import {Item } from './Item'

export default class ItemValue {
    item: Item
    value: number

    constructor(item: Item, value: number) {
        this.item = item
        this.value = value  
    }
}