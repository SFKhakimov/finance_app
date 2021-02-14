import React from 'react'
import { PartialRouteObject } from 'react-router'
import PersonIcon from '@material-ui/icons/Person'
import TrackChangesIcon from '@material-ui/icons/TrackChanges'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ProfilePage from 'lk/pages/Profile/Profile'
import TargetPage from 'lk/pages/Target/Target'
import Error404 from 'common/pages/Errors/Error404'
import HomePage from 'lk/pages/Home/Home'

const lkRoutes: PartialRouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'profile',
        element: <ProfilePage />,
    },
    {
        path: 'target',
        element: <TargetPage />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
]

export const drawerMenuItems = [
    {
        href: '/lk/profile',
        label: 'Профиль',
        icon: <PersonIcon />,
    },
    {
        href: '/lk/target',
        label: 'Цель',
        icon: <TrackChangesIcon />,
    },
    {
        href: '/lk',
        label: 'Траты',
        icon: <DashboardIcon />,
    },
]

export default lkRoutes
