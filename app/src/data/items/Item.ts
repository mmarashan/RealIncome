import { MultilanguageText } from '../utils/Text'

enum ItemType {
    CURRENCY,
    REALTY,
    FOOD,
    COMMODITY,
}

class Item {
    type: ItemType
    key: string
    description: MultilanguageText

    constructor(type: ItemType, key: string, description: MultilanguageText) {
        this.type = type
        this.key = key
        this.description = description
    }
}

export {ItemType, Item}