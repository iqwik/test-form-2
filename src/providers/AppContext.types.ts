import { UsePaginationReturnT } from '../hooks'
import { ChoosenStatus, TicketsT } from '../constants'
import { ITEMS, TicketsDropDownSingleElementProps } from '../views/organisms/Tickets/views/atoms'

export const defaultContextProps = {
    isLoading: false,
    setIsLoading: () => {},
    choosenStatus: ITEMS.ALL,
    setChoosenStatus: () => {},
    dropdownOpts: [],
    tickets: [],
    setTickets: () => {},

    count: 0,
    totalPages: 0,
    nextPage: () => {},
    prevPage: () => {},
    firstContentIndex: 0,
    lastContentIndex: 0,
    page: 0,
    setPage: () => {},

    searchForumText: '',
    setSearchForumText: () => {},
    searchText: '',
    setSearchText: () => {},
    findTicketsByText: () => {},
    clearSearchText: () => {},
}

export type AppContextType = {
    isLoading: boolean
    setIsLoading: (x: boolean) => void
    choosenStatus: ChoosenStatus
    setChoosenStatus: (x: any) => void
    dropdownOpts: TicketsDropDownSingleElementProps[] | any
    tickets: TicketsT[] | any
    setTickets: (x: any) => void

    count: number

    searchForumText: string
    setSearchForumText: (x: string) => void
    searchText: string
    setSearchText: (x: string) => void
    findTicketsByText: (x: string, setX: (t: string) => void, y: boolean | undefined) => void
    clearSearchText: (setX: (t: string) => void) => void
} & UsePaginationReturnT
