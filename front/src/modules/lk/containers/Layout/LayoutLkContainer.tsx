import React, { ReactNode } from 'react'
import LayoutLk from 'lk/components/Layout/LayoutLk'
import HeaderContainer from 'common/containers/Header/Header'

type Props = {
    children: ReactNode
}

const LayoutLkContainer: React.FC<Props> = ({ children }) => {
    return <LayoutLk header={<HeaderContainer />}>{children}</LayoutLk>
}

export default LayoutLkContainer
