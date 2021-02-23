import React from 'react'
import HomeAddOperationsModal from 'lk/components/Home/HomeAddOperationsModal'
import { useFormik } from 'formik'
import validationSchema from 'lk/containers/Home/validationSchema'

type Props = {
    closeModal: () => void
}

const HomeAddOperationsModalContainer: React.FC<Props> = ({ closeModal }) => {
    const initialValues = {
        transactionType: '',
        sum: '',
        description: '',
    }

    const handleSubmitForm = () => {
        if (!isValid) {
            return
        }
        console.log(values)
        closeModal()
    }

    const {
        values,
        isValid,
        touched,
        errors,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues,
        onSubmit: handleSubmitForm,
        validationSchema,
    })

    return (
        <HomeAddOperationsModal
            values={values}
            touched={touched}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCloseModal={closeModal}
        />
    )
}

export default HomeAddOperationsModalContainer
