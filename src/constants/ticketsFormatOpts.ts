import { ITEMS, ITEMS_LABELS } from '../views/organisms/Tickets/views/atoms'

const getQuantity = (array, status) => array.filter(({ status: lowerCaseStatus }) => lowerCaseStatus === status)?.length || 0

export const ticketsFormatOpts = (tickets) => Object.entries(ITEMS_LABELS).map(([value, label]) => ({
    label,
    value,
    quantity: value === ITEMS.ALL ? tickets.length : getQuantity(tickets, value.toLowerCase()),
}))
