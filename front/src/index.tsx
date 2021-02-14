import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ReactProvider from './common/providers/RouterProvider/RouterProvider'
import ThemeProvider from 'common/providers/ThemeProvider/ThemeProvider'
import routes from './routes'

const App: React.FC = () => (
    <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider>
                <ReactProvider routes={routes} />
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#app'))
