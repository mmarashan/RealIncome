enum Lang {
    RU, EN,
}

class MultilanguageText {
    translations: Map<Lang, string>

    constructor(languages: Lang[], values: string[]) {
        this.translations = new Map()
        languages.forEach((lang, index) => {
            this.translations.set(lang, values[index])
        })
    }

    get(language: Lang): string | undefined {
       return this.translations.get(language)
    }
}