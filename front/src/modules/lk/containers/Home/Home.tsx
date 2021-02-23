import React from 'react'
import Home from 'lk/components/Home/Home'
import { Transaction } from 'common/services/ApiService/types/Transactions/Transaction'
import HomeAddOperationsModalContainer from 'lk/containers/Home/HomeAddOperationsModal'

class TransactionModalProps {}

const HomeContainer: React.FC = () => {
    const mockData = {
        initialBalance: 2300,
        currentBalance: 1700,
    }

    const addTransactionModal = (props: TransactionModalProps) => (
        <HomeAddOperationsModalContainer {...props} />
    )

    const transactions: Transaction[] = [
        {
            type: 'expense',
            sum: 1650,
            title: 'Ресторан',
            date: '21.01.2021',
        },
        {
            type: 'expense',
            sum: 2450,
            title: 'Туса с друзьями',
            date: '19.01.2021',
        },
    ]

    return (
        <Home
            balance={mockData}
            transactions={transactions}
            addTransactionModal={addTransactionModal}
        />
    )
}

export default HomeContainer
