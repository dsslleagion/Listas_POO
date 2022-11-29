export default class RG {
    private valor: string
    private dataEmissao: string
    constructor(valor: string, dataEmissao: string) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): string {
        return this.dataEmissao
    }
}