import React, {
    createContext, useCallback, useEffect, useMemo, useState,
} from 'react'

import { usePagination } from '../hooks'
import {
    getFilteredTicketsByStatus,
    getTickets,
    getTicketsByTitle,
    requestTickets,
    ticketsFormatOpts,
} from '../constants'
import { AppContextType, defaultContextProps } from './AppContext.types'

export const AppContext = createContext<AppContextType>(defaultContextProps)

export const CONTENT_PER_PAGE = 10

const AppContextProvider = ({ children }): JSX.Element => {
    const [isLoading, setIsLoading] = useState<AppContextType['isLoading']>(defaultContextProps.isLoading)

    const allTickets: AppContextType['tickets'] = useMemo(() => getTickets(), [])

    const [tickets, setTickets] = useState<AppContextType['tickets']>(defaultContextProps.tickets)
    const [choosenStatus, setChoosenStatus] = useState<AppContextType['choosenStatus']>(defaultContextProps.choosenStatus)

    const [searchForumText, setSearchForumText] = useState<AppContextType['searchForumText']>(defaultContextProps.searchForumText)
    const [searchText, setSearchText] = useState<AppContextType['searchText']>(defaultContextProps.searchText)

    const [pagiQtyAfterSearch, setPagiQtyAfterSearch] = useState<AppContextType['tickets'] | null>(null)

    const {
        totalPages,
        nextPage,
        prevPage,
        firstContentIndex,
        lastContentIndex,
        page,
        setPage,
    } = usePagination({
        contentPerPage: CONTENT_PER_PAGE,
        count: pagiQtyAfterSearch || allTickets.length,
    })

    const currentTicketsList = useMemo(() => {
        const currentList = allTickets.slice(firstContentIndex, lastContentIndex)
        setTickets(currentList)
        return currentList
    }, [
        allTickets,
        firstContentIndex,
        lastContentIndex,
    ])

    const dropdownOpts = useMemo(() => (
        ticketsFormatOpts(searchForumText || searchText ? tickets : currentTicketsList)
    ), [
        tickets,
        currentTicketsList,
        searchForumText,
        searchText,
    ])

    useEffect(() => {
        const currentList = searchForumText || searchText ? tickets : currentTicketsList

        requestTickets(setIsLoading, () => {
            const ticketsList = getFilteredTicketsByStatus(currentList, choosenStatus)
            setTickets(ticketsList)
        })
    }, [choosenStatus, page])

    const findTicketsByText = useCallback((text, setText, byForum = false) => {
        requestTickets(setIsLoading, () => {
            const ticketsList = getTicketsByTitle(allTickets, text, byForum)

            setText(text)
            setPagiQtyAfterSearch(ticketsList.length)
            setPage(1)
            setTickets(ticketsList.length > CONTENT_PER_PAGE ? ticketsList.slice(firstContentIndex, lastContentIndex) : ticketsList)
        })
    }, [allTickets])

    const clearSearchText = useCallback((setText) => {
        requestTickets(setIsLoading, () => {
            const ticketsList = allTickets.slice(firstContentIndex, lastContentIndex)

            setText(defaultContextProps.searchText)
            setPagiQtyAfterSearch(null)
            setPage(1)
            setTickets(ticketsList)
            setChoosenStatus(defaultContextProps.choosenStatus)
        })
    }, [allTickets])

    const value = useMemo(() => ({
        isLoading,
        setIsLoading,
        choosenStatus,
        setChoosenStatus,
        dropdownOpts,
        tickets,
        setTickets,

        count: pagiQtyAfterSearch || allTickets.length,
        totalPages,
        nextPage,
        prevPage,
        firstContentIndex,
        lastContentIndex,
        page,
        setPage,

        searchForumText,
        setSearchForumText,
        searchText,
        setSearchText,
        findTicketsByText,
        clearSearchText,
    }), [
        pagiQtyAfterSearch,
        allTickets,
        currentTicketsList,
        tickets,
        firstContentIndex,
        lastContentIndex,
        page,
        totalPages,

        isLoading,
        choosenStatus,
        dropdownOpts,
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
