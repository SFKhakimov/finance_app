import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
})

type Props = {
    header: ReactNode
}

const LayoutLk: React.FC<Props> = ({ children, header }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {header}
            {children}
        </Box>
    )
}

export default LayoutLk
