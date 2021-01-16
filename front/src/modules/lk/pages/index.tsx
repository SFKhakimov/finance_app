import React from 'react'
import { PartialRouteObject } from 'react-router'
import Profile from 'lk/pages/Profile/Profile'
import Target from 'lk/pages/Target/Target'
import Error404 from 'common/pages/Errors/Error404'
import Home from 'lk/pages/Home/Home'

const lkRoutes: PartialRouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'profile',
        element: <Profile />
    },
    {
        path: 'target',
        element: <Target />
    },
    {
        path: '*',
        element: <Error404 />,
    },
]

export default lkRoutes
