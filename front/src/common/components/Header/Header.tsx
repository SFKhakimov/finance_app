import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import MenuDrawer from 'common/components/MenuDrawer/HeaderDrawer'

const Header: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false)

    const handleOpenDrawer = () => setIsOpened(true)
    const handleCloseDrawer = () => setIsOpened(false)
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleOpenDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MenuDrawer isOpened={isOpened} onCloseDrawer={handleCloseDrawer} />
        </>
    )
}

export default Header
