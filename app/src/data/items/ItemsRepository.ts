import {Item, ItemType} from './Item'
import { MultilanguageText, Lang } from '../utils/Text'

export default class ItemsRepository {

    static Rouble: Item = new Item(
        ItemType.CURRENCY,
        "RUB",
        new MultilanguageText([Lang.RU], ["Рубль"])
    )

    static USD: Item = new Item(
        ItemType.CURRENCY,
        "USD",
        new MultilanguageText([Lang.RU], ["Доллар США"])
    )

    static COLD: Item = new Item(
        ItemType.COMMODITY,
        "GOLD",
        new MultilanguageText([Lang.RU], ["Золото"])
    )

    static allItems: Item[] = [this.Rouble, this.USD, this.COLD]
}
