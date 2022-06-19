import React, {
    createContext, useCallback, useEffect, useMemo, useState,
} from 'react'

import {
    getTickets, getTicketsByTitle, requestTickets, ticketsFormatOpts,
} from '../constants'
import { ITEMS, TicketsDropDownSingleElementProps } from '../views/organisms/Tickets/views/atoms'

const defaultContextProps = {
    isLoading: false,
    setIsLoading: () => {},
    choosenStatus: ITEMS.ALL,
    setChoosenStatus: () => {},
    dropdownOpts: [],
    tickets: [],
    setTickets: () => {},

    searchForumText: '',
    setSearchForumText: () => {},
    searchText: '',
    setSearchText: () => {},
    findTicketsByText: () => {},
    clearSearchText: () => {},
}

type ChoosenStatus = typeof ITEMS[keyof typeof ITEMS]
type AppContextType = {
    isLoading: boolean
    setIsLoading: (x: boolean) => void
    choosenStatus: ChoosenStatus
    setChoosenStatus: (x: any) => void
    dropdownOpts: TicketsDropDownSingleElementProps[] | any
    tickets: any[]
    setTickets: (x: any) => void

    searchForumText: string
    setSearchForumText: (x: string) => void
    searchText: string
    setSearchText: (x: string) => void
    findTicketsByText: (x: string, setX: (t: string) => void, y: boolean | undefined) => void
    clearSearchText: (setX: (t: string) => void) => void
}

export const AppContext = createContext<AppContextType>(defaultContextProps)

const AppContextProvider = ({ children }): JSX.Element => {
    const [isLoading, setIsLoading] = useState(defaultContextProps.isLoading)
    const [tickets, setTickets] = useState(defaultContextProps.tickets)
    const [choosenStatus, setChoosenStatus] = useState(defaultContextProps.choosenStatus)

    const [searchForumText, setSearchForumText] = useState(defaultContextProps.searchForumText)
    const [searchText, setSearchText] = useState(defaultContextProps.searchText)

    const dropdownOpts = useMemo(() => ticketsFormatOpts(getTickets()), [])

    useEffect(() => {
        if (searchText.length) {
            setSearchText(defaultContextProps.searchText)
        }
        if (searchForumText.length) {
            setSearchForumText(defaultContextProps.searchForumText)
        }
        requestTickets(setIsLoading, () => {
            const ticketsList: any = getTickets(choosenStatus)
            setTickets(ticketsList)
        })
    }, [choosenStatus])

    const findTicketsByText = useCallback((text, setText, byForum = false) => {
        requestTickets(setIsLoading, () => {
            const ticketsList: any = getTicketsByTitle(text, byForum)
            setTickets(ticketsList)
            setText(text)
        })
    }, [])

    const clearSearchText = useCallback((setText) => {
        requestTickets(setIsLoading, () => {
            const ticketsList: any = getTicketsByTitle()
            setTickets(ticketsList)
            setText(defaultContextProps.searchText)
        })
    }, [])

    const value = useMemo(() => ({
        isLoading,
        setIsLoading,
        choosenStatus,
        setChoosenStatus,
        dropdownOpts,
        tickets,
        setTickets,

        searchForumText,
        setSearchForumText,
        searchText,
        setSearchText,
        findTicketsByText,
        clearSearchText,
    }), [
        isLoading,
        choosenStatus,
        dropdownOpts,
        tickets,
        searchForumText,
        searchText,
    ])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
