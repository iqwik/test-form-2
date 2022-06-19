import * as React from 'react'

import { AppContextProvider } from './providers'
import {
    SupportResources,
    Tickets,
} from './views/organisms'
import { HelpButton } from './views/atoms'

import './styles/theme.scss'

const App = (): JSX.Element => (
    <AppContextProvider>
        <main>
            <SupportResources />
            <Tickets />
            <HelpButton />
        </main>
    </AppContextProvider>
)

export default React.memo(App)
