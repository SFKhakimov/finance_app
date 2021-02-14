import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

type Props = {
    sum: number,
    title: string
}

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
})

const Transaction: React.FC<Props> = ({ sum, title }) => {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Paper
                elevation={3}
                className={classes.container}>
                <Box display="flex" alignItems="center" p={1}>
                    <Grid
                        container
                        justify="space-between"
                        spacing={2}>
                        <Grid item xs={5}>
                            <Box
                                display="flex"
                                justifyContent="center">
                                <Box pr={1}>
                                    <RemoveIcon />
                                </Box>
                                <Typography
                                    variant="body2"
                                    component="p">
                                    {sum} руб
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography
                                variant="body2"
                                component="p">
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Transaction
