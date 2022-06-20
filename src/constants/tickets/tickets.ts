import { ITEMS } from '../../views/organisms/Tickets/views/atoms'

import tickets from './tickets.json'
import { TicketsT, ChoosenStatus } from './tickets.types'

export const getTickets = () => tickets

export const getFilteredTicketsByStatus = (
    ticketsList: Array<TicketsT | any> = [],
    choosenStatus: ChoosenStatus = ITEMS.ALL,
) => {
    if (choosenStatus === ITEMS.ALL) {
        return ticketsList
    }

    const choosenStatusInLowerCase = choosenStatus.toLowerCase()
    return ticketsList.filter((ticket) => ticket.status === choosenStatusInLowerCase)
}

export const getTicketsByTitle = (
    ticketsList: Array<TicketsT | any> = [],
    searchText = '',
    byForum = false,
) => {
    if (!searchText.length) {
        return ticketsList
    }

    const searchTextInLowerCase = searchText.toLowerCase()
    return ticketsList.filter((ticket) => (
        (byForum ? ticket.forum.title : ticket.title).toLowerCase()
            .indexOf(searchTextInLowerCase) !== -1
    ))
}

export const requestTickets = (setIsLoading: (x: boolean) => void, cb: () => void) => {
    setIsLoading(true)
    let isCanceled = false

    if (!isCanceled) {
        cb()
        setTimeout(() => { setIsLoading(false) }, 500)
    }

    return () => { isCanceled = true }
}
