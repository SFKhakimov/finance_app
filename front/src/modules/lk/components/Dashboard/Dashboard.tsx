import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { CircularProgress, createStyles, makeStyles } from '@material-ui/core'
import { Balance } from 'common/services/ApiService/types/Balance/Balance'

const useStyles = makeStyles(theme =>
    createStyles({
        container: {
            background: '#f5f5f5',
            borderRadius: '0 0 50% 50% / 0 0 25px 25px',
        },
        appBarHeight: {
            ...theme.mixins.toolbar,
        },
        balanceToday: {
            borderRadius: 50,
            minHeight: 90,
            position: 'relative',
        },
        circularInitial: {
            position: 'absolute',
            color: theme.palette.grey[300],
        },
        circularProgress: {
            position: 'absolute',
        },
    })
)

type Props = {
    balance: Balance
}

const Dashboard: React.FC<Props> = ({ balance }) => {
    const classes = useStyles()
    const { currentBalance, initialBalance } = balance
    const progress = 100 - (currentBalance * 100) / initialBalance
    return (
        <>
            <div className={classes.appBarHeight} />
            <Container maxWidth="lg" className={classes.container}>
                <Box pb={3} pt={2}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Grid container spacing={1} justify="space-between">
                                <Grid item xs={3}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        height="100%"
                                        justifyContent="center">
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            {initialBalance - currentBalance} Р
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            Потрачено
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        className={classes.balanceToday}>
                                        <CircularProgress
                                            variant="determinate"
                                            value={100}
                                            className={classes.circularInitial}
                                            size={100}
                                            thickness={2}
                                        />
                                        <CircularProgress
                                            variant="determinate"
                                            value={Math.round(progress)}
                                            className={classes.circularProgress}
                                            size={100}
                                            thickness={2}
                                        />
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            {currentBalance} Р
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            Осталось
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        height="100%"
                                        justifyContent="center">
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            23456
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p">
                                            остаток
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Dashboard
