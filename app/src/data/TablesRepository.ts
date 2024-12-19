class TablesRepository {

    static UsdToRubTable: Table = new Table(
        ItemsRepository.USD,
        ItemsRepository.Rouble,
        new Map([[2023, 85], [2023, 95], [2024, 105]])
    )

}