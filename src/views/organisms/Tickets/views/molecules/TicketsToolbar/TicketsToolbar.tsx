import React, { useContext } from 'react'

import { AppContext } from '../../../../../../providers'
import { InputSearch } from '../../../../../atoms'

import { TicketsDropDown } from '../../atoms'

const TicketsToolbar = () => {
    const {
        isLoading,
        dropdownOpts,
        choosenStatus,
        setChoosenStatus,
        searchText,
        setSearchText,
        searchForumText,
        setSearchForumText,
        findTicketsByText,
        clearSearchText,
    } = useContext(AppContext)

    return (
        <>
            <h4>My Tickets</h4>
            <div className="d-flex">
                {!isLoading && dropdownOpts.length && (
                    <TicketsDropDown
                        value={choosenStatus}
                        setValue={setChoosenStatus}
                        options={dropdownOpts}
                    />
                )}
                <InputSearch
                    value={searchText}
                    setValue={setSearchText}
                    onSubmit={(value) => {
                        if (searchForumText.length) {
                            setSearchForumText('')
                        }
                        findTicketsByText(value, setSearchText, false)
                    }}
                    onCancel={() => { clearSearchText(setSearchText) }}
                    placeholder="Search Tickets"
                    width={240}
                />
            </div>
        </>
    )
}

export default TicketsToolbar
