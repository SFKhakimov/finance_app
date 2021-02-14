import React from 'react'
import { Navigate, PartialRouteObject } from 'react-router'
import MainPage from 'store/pages/Main/Main'
import Error404 from 'common/pages/Errors/Error404'

const storeRoutes: PartialRouteObject[] = [
    {
        path: '/',
        element: <Navigate to={'store'} />,
    },
    {
        path: 'store',
        element: <MainPage />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
]

export default storeRoutes
