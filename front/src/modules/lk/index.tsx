import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutLkContainer from 'lk/containers/Layout/LayoutLkContainer'

const LkModule = () => {
    return (
        <LayoutLkContainer>
            <Outlet />
        </LayoutLkContainer>
    )
}

export default LkModule
