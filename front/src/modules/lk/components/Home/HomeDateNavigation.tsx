import React from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { KeyboardDatePicker } from '@material-ui/pickers'

const HomeDateNavigation = () => {
    const currentDate = false
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb={3}>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            {!currentDate && (
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    value={new Date('2014-08-18T21:11:54')}
                    onChange={() => console.log('выбор даты')}
                />
            )}
            {currentDate && (
                <Typography variant="body2" component="p">
                    Сегодня
                </Typography>
            )}
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </Box>
    )
}

export default HomeDateNavigation
