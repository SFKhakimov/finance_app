import React from 'react'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { TRANSACTIONS_OPTIONS } from 'common/utils/constants/transactions'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { Button, FormHelperText } from '@material-ui/core'
import { FormikErrors, FormikHandlers } from 'formik'
import { FormikTouched } from 'formik/dist/types'

export type TransactionFormikValues = {
    transactionType: string
    sum: string
    description: string
}

type Props = {
    onCloseModal: () => void
    values: TransactionFormikValues
    touched: FormikTouched<TransactionFormikValues>
    errors: FormikErrors<TransactionFormikValues>
    onChange: FormikHandlers['handleChange']
    onSubmit: () => void
}

const HomeAddOperationsModal: React.FC<Props> = ({
    values,
    touched,
    errors,
    onChange,
    onSubmit,
    onCloseModal,
}) => {
    return (
        <Box>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <FormControl
                        fullWidth
                        error={
                            errors.transactionType && touched.transactionType
                        }>
                        <InputLabel required>Тип операции</InputLabel>
                        <Select name="transactionType" onChange={onChange}>
                            {TRANSACTIONS_OPTIONS.map(item => (
                                <MenuItem value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors.transactionType && touched.transactionType && (
                            <FormHelperText>
                                {errors.transactionType}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                        name="sum"
                        onChange={onChange}
                        placeholder="Введите сумму*"
                        error={errors.sum && touched.sum}
                        helperText={touched.sum && errors.sum}
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="description"
                        onChange={onChange}
                        placeholder="Введите описание*"
                        error={errors.description && touched.description}
                        helperText={touched.description && errors.description}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box pt={3}>
                <Grid container justify="flex-end" spacing={2}>
                    <Grid item>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={onCloseModal}>
                            Отменить
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={onSubmit}>
                            Принять
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomeAddOperationsModal
