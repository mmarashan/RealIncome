import Table from "./Table"
import ItemsRepository from '../items/ItemsRepository'

export default class TablesRepository {

    UsdToRubTable: Table = new Table(
        ItemsRepository.USD,
        ItemsRepository.Rouble,
        new Map([[2022, 85], [2023, 95], [2024, 105]])
    )

    GoldToRubTable: Table = new Table(
        ItemsRepository.USD,
        ItemsRepository.Rouble,
        new Map([[2022, 2000], [2023, 2500], [2024, 4000]])
    )


    allTables: Table[] = [this.UsdToRubTable, this.GoldToRubTable]
}