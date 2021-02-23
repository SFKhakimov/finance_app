import * as Yup from 'yup'
import { REQ } from 'common/utils/constants/validationErrors'

const validationSchema = Yup.object().shape({
    transactionType: Yup.string().required(REQ),
    sum: Yup.number().required(REQ),
    description: Yup.string().required(REQ)
})

export default validationSchema

