import React from 'react'
import ReactDOM from 'react-dom'
import ruLocale from 'date-fns/locale/ru'
import { BrowserRouter } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ReactProvider from './common/providers/RouterProvider/RouterProvider'
import ThemeProvider from 'common/providers/ThemeProvider/ThemeProvider'
import ModalProvider from 'common/providers/ModalProvider/ModalProvider'
import routes from './routes'

const App: React.FC = () => (
    <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <ThemeProvider>
                <ModalProvider>
                    <ReactProvider routes={routes} />
                </ModalProvider>
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#app'))
