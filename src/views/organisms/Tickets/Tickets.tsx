import React, { useContext } from 'react'

import { AppContext } from '../../../providers'
import { PageBlock } from '../../molecules'

import {
    TicketsToolbar,
    TicketsContent,
    TicketsPagination,
} from './views/molecules'

const Tickets = (): JSX.Element => {
    const { tickets, isLoading } = useContext(AppContext)

    return (
        <div className={tickets.length && !isLoading ? 'tickets-wrapper' : ''}>
            <PageBlock>
                <PageBlock.Header>
                    <TicketsToolbar />
                </PageBlock.Header>
                <PageBlock.Content>
                    <TicketsContent />
                </PageBlock.Content>
            </PageBlock>
            <TicketsPagination />
        </div>
    )
}

export default Tickets
