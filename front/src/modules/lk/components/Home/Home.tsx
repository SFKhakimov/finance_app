import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Dashboard from 'lk/components/Dashboard/Dashboard'
import TransactionComponent from 'lk/components/Transaction/Transaction'
import { Transaction } from 'common/services/ApiService/types/Transactions/Transaction'
import HomeDateNavigation from 'lk/components/Home/HomeDateNavigation'

type Props = {
    transactions: Transaction[]
}

const Home: React.FC<Props> = ({ transactions }) => {
    const transactionsField = transactions.map(({ title, sum }, index) => (
        <TransactionComponent
            key={`${title}-${sum}-${index}`}
            sum={sum}
            title={title}
        />
    ))

    return (
        <>
            <Dashboard />
            <Box height="100%" display="flex" flexDirection="column">
                <Container maxWidth="lg">
                    <HomeDateNavigation />
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        pb={4}>
                        <Typography variant="h6" component="h6">
                            Ваши операции
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {transactionsField}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Home
