import React from 'react'
import useGlobalStyles from 'common/services/ThemeService/useGlobalStyles'

const ThemeProvider: React.FC = ({ children }) => {
    useGlobalStyles()

    return <>{children}</>
}

export default ThemeProvider
