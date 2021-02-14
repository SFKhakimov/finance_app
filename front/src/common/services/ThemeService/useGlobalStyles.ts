import { createStyles, makeStyles } from '@material-ui/core'

const useGlobalStyles = makeStyles(() =>
    createStyles({
        '@global': {
            body: {
                margin: 0,
            },
        },
    })
)

export default useGlobalStyles
