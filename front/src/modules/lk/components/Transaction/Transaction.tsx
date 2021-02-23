import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles, Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'

type Props = {
    sum: number
    title: string
}

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
})

const Transaction: React.FC<Props> = ({ sum, title }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const isOpen = Boolean(anchorEl)

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const options = [
        {
            label: 'Редактировать',
            actions: () => {
                handleCloseMenu()
            },
        },
        {
            label: 'Удалить',
            actions: () => {
                handleCloseMenu()
            },
        },
    ]

    return (
        <Grid item xs={12}>
            <Paper elevation={3} className={classes.container}>
                <Box display="flex" alignItems="center" p={1}>
                    <Grid container justify="space-between" spacing={2}>
                        <Grid item xs={5}>
                            <Box display="flex" justifyContent="center">
                                <Box pr={1}>
                                    <RemoveIcon />
                                </Box>
                                <Typography variant="body2" component="p">
                                    {sum} руб
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Typography variant="body2" component="p">
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        size="small"
                                        onClick={handleOpenMenu}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Menu
                                open={isOpen}
                                anchorEl={anchorEl}
                                onClose={handleCloseMenu}>
                                {options.map(option => (
                                    <MenuItem onClick={option.actions}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Transaction
