import React, { useContext } from 'react'

import { AppContext } from '../../../../../../../../providers'
import { Icon, ICONS_TYPES } from '../../../../../../../atoms'

const NoTickets = () => {
    const { searchText } = useContext(AppContext)

    if (searchText.length) {
        return (
            <>
                <Icon icon={ICONS_TYPES.TELESCOPE} />
                <h5 style={{ marginTop: '30px' }}>No tickets found for &quot;{searchText}&quot;</h5>
                <p>Please adjust your search term and try again.</p>
            </>
        )
    }

    return (
        <>
            <Icon icon={ICONS_TYPES.NOTICKETS} />
            <h5>No Tickets Found!</h5>
            <p>Your support tickets or feature requests will appear here.</p>
        </>
    )
}

export default NoTickets
