import React from 'react'
import { PartialRouteObject } from 'react-router'
import Main from 'store/pages/Main/Main'
import Error404 from 'common/pages/Errors/Error404'

const storeRoutes: PartialRouteObject[] = [
    {
        path: 'store',
        element: <Main />
    },
    {
        path: '*',
        element: <Error404 />,
    },
]

export default storeRoutes
