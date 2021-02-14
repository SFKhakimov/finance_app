import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core'
import { drawerMenuItems } from 'lk/pages'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

type Props = {
    isOpened: boolean
    onCloseDrawer: () => void
}

const MenuDrawer: React.FC<Props> = ({ isOpened, onCloseDrawer }) => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleNavigate = (href: string) => {
        navigate(href)
        onCloseDrawer()
    }

    const list = (
        <List className={classes.list}>
            {drawerMenuItems.map(item => (
                <ListItem
                    button
                    key={item.label}
                    onClick={() => handleNavigate(item.href)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
    return (
        <>
            <Drawer anchor="left" open={isOpened} onClose={onCloseDrawer}>
                {list}
            </Drawer>
        </>
    )
}

export default MenuDrawer
