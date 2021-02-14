import React from 'react'
import Home from 'lk/components/Home/Home'
import { Transaction } from 'common/services/ApiService/types/Transactions/Transaction'

const HomeContainer: React.FC = () => {

    const transactions: Transaction[] = [
        {
            type: 'expense',
            sum: 1650,
            title: 'Ресторан',
            date: '21.01.2021'
        },
        {
            type: 'expense',
            sum: 2450,
            title: 'Туса с друзьями',
            date: '19.01.2021'
        }
    ]

    return <Home transactions={transactions} />
}

export default HomeContainer
