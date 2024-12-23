class ItemsRepository {

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

    static allItems: Item[] = [this.Rouble, this.USD]
}
