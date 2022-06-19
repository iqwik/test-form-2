import { ITEMS } from '../../views/organisms/Tickets/views/atoms'
import { ChoosenStatus } from '../../views/organisms/Tickets/Tickets.context'
import tickets from './tickets.json'

export const getTickets = (defaultStatus: ChoosenStatus = ITEMS.ALL) => {
    if (defaultStatus === ITEMS.ALL) {
        return tickets
    }

    const status = defaultStatus.toLowerCase()
    return tickets.filter((ticket) => ticket.status === status)
}

export const getTicketsByTitle = (searchText = '', byForum = false) => {
    if (!searchText.length) {
        return tickets
    }

    return tickets.filter((ticket) => (
        (byForum ? ticket.forum.title : ticket.title).toLowerCase()
            .indexOf(searchText.toLowerCase()) !== -1
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
