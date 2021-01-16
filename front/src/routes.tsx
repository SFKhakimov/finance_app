import React from 'react'
import { PartialRouteObject } from 'react-router'
import storeRoutes from 'store/pages'
import lkRoutes from 'lk/pages'
import LkModule from 'lk/index'
import StoreModule from 'store/index'
import Error404 from 'common/pages/Errors/Error404'
import Error403 from 'common/pages/Errors/Error403'
import Auth from 'common/pages/Auth/Auth'

const routes: PartialRouteObject[] = [
    {
        path: '/*',
        element: <StoreModule />,
        children: storeRoutes,
    },
    {
        path: 'lk/*',
        element: <LkModule />,
        children: lkRoutes,
    },
    {
        path: 'auth',
        element: <Auth />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
    {
        path: '403',
        element: <Error403 />,
    },
]

export default routes
