import React, { createContext, ReactNode, useContext, useState } from 'react'
import {
    Dialog,
    DialogActions,
    DialogActionsProps,
    DialogContent,
    DialogContentProps,
    DialogProps,
    DialogTitle,
    DialogTitleProps, makeStyles,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0
    }
}))

type ModalProps = {
    content: {
        title?: string | ReactNode,
        body: string | ReactNode,
        actions?: ReactNode,
    }
    dialogProps?: DialogProps,
    titleProps?: DialogTitleProps
    contentProps?: DialogContentProps,
    actionsProps?: DialogActionsProps
    isOpen: boolean
}

const ModalContext = createContext(undefined)

export const useModal = () => useContext(ModalContext)

const ModalProvider: React.FC = ({ children}) => {
    const [modal, setModal] = useState<ModalProps>({})

    const classes = useStyles()

    const openModal = (options: ModalProps) => {
        setModal({
            ...options,
            isOpen: true,
        })
    }
    const closeModal = () => {
        setModal({
            ...modal,
            isOpen: false
        })
    }

    const { content: { title, body, actions } = {}, dialogProps, titleProps, contentProps, actionsProps, isOpen } = modal

    const contextValue = { openModal, closeModal }
    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            {isOpen && (
                <Dialog open={isOpen || false} onClose={closeModal} {...dialogProps}>
                    <DialogTitle {...titleProps}>
                        {typeof title === 'string' ? (
                            <Typography variant="h6">{title}</Typography>
                        ) : title}
                        <IconButton className={classes.closeButton} onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent{...contentProps}>
                        {body}
                    </DialogContent>
                    <DialogActions {...actionsProps}>
                        {actions}
                    </DialogActions>
                </Dialog>
            )}
        </ModalContext.Provider>
    )
}

export default ModalProvider
