import React from 'react'
import { useRoutes } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

type Props = {
    routes: PartialRouteObject[]
}

const ReactProvider: React.FC<Props> = ({ routes }) => {
    const route = useRoutes(routes)
    return route
}

export default ReactProvider
