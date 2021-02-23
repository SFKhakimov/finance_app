import React, { useState } from 'react'
import { format } from 'date-fns'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { KeyboardDatePicker } from '@material-ui/pickers'

const HomeDateNavigation = () => {
    const currentDate = false
    const [date, setDate] = useState<string | null>()
    const handleDate = (date: Date) => {
        console.log(date)
        setDate(format(date, 'dd.MM.yyyy'))
    }

    const handlePreviousDate = () => {
        const newDate = new Date(date).getTime() - 1000 * 60 * 24
        handleDate(new Date(newDate))
    }
    console.log(date)
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb={3}>
            <IconButton onClick={handlePreviousDate}>
                <ChevronLeftIcon />
            </IconButton>
            {!currentDate && (
                <KeyboardDatePicker
                    disableToolbar
                    disableFuture
                    autoOk
                    variant="dialog"
                    format="dd.MM.yyyy"
                    value={date}
                    onChange={handleDate}
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
