export enum TransactionsEnum {
    incomeTransaction = 'incomeTransaction',
    expenseTransaction = 'expenseTransaction',
}

export const TRANSACTIONS_OPTIONS = [
    {value: TransactionsEnum.incomeTransaction, label: 'Доходная операция'},
    {value: TransactionsEnum.expenseTransaction, label: 'Расходная операция'}
]
