export const languagesTranslator = (lan: string) => {
    const languages: any = {
        'en': '英文',
        'zh': '中文'
    }
    return languages[lan]
}