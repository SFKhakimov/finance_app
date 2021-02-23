import React, { ReactNode } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Transaction } from 'common/services/ApiService/types/Transactions/Transaction'
import HomeDateNavigation from 'lk/components/Home/HomeDateNavigation'
import Dashboard from 'lk/components/Dashboard/Dashboard'
import TransactionComponent from 'lk/components/Transaction/Transaction'
import { useModal } from 'common/providers/ModalProvider/ModalProvider'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core'
import { Balance } from 'common/services/ApiService/types/Balance/Balance'

const useStyles = makeStyles(theme => ({
    button: {
        position: 'fixed',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
    },
}))

type TransactionModalProps = {
    closeModal: () => void
}

type Props = {
    transactions: Transaction[]
    addTransactionModal: (props: TransactionModalProps) => ReactNode
    balance: Balance
}

const Home: React.FC<Props> = ({
    balance,
    transactions,
    addTransactionModal,
}) => {
    const { openModal, closeModal } = useModal()
    const classes = useStyles()

    const transactionsField = transactions.map(({ title, sum }, index) => (
        <TransactionComponent
            key={`${title}-${sum}-${index}`}
            sum={sum}
            title={title}
        />
    ))

    const handleOpenModal = () => {
        openModal({
            content: {
                title: 'Добавить операцию',
                body: addTransactionModal({ closeModal }),
            },
            dialogProps: {
                maxWidth: 'xs',
                fullWidth: true,
            },
        })
    }

    return (
        <>
            <Dashboard balance={balance} />
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
                    <Fab
                        color="secondary"
                        className={classes.button}
                        onClick={handleOpenModal}>
                        <AddIcon />
                    </Fab>
                </Container>
            </Box>
        </>
    )
}

export default Home
