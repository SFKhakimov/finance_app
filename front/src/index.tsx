import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactProvider from './common/providers/RouterProvider/RouterProvider'
import routes from './routes'

const App: React.FC = () => (
    <BrowserRouter>
        <ReactProvider routes={routes} />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#app'))
