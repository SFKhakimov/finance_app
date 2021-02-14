export type Transaction = {
    type: 'expense' | 'income'
    sum: number
    title: string
    date: string
}
