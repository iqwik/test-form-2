import React, { useCallback, useContext } from 'react'

import { AppContext } from '../../../../../../providers'
import { Spinner } from '../../../../../atoms'

import { Table, NoTickets } from './components'

const TicketsContent = () => {
    const { isLoading, tickets } = useContext(AppContext)

    const renderContent = useCallback(() => (
        tickets.length ? <Table /> : <NoTickets />
    ), [isLoading, tickets])

    return (
        <div style={{ position: 'relative' }}>
            {!isLoading && renderContent()}
            <Spinner visible={isLoading} />
        </div>
    )
}

export default TicketsContent
