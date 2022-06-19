import React, { useContext } from 'react'

import { AppContext } from '../../../../../../providers'
import { Icon, ICONS_TYPES, InputSearch } from '../../../../../atoms'

import s from './SupportResourcesContent.module.scss'

const SupportResourcesContent = () => {
    const {
        searchForumText,
        setSearchForumText,
        findTicketsByText,
        clearSearchText,
    } = useContext(AppContext)

    return (
        <>
            <Icon icon={ICONS_TYPES.MESSAGES} />
            <h5>Support Forums</h5>
            <p>Search the topic you need help with in our support forums.</p>
            <a href="#" className={['link', s.Link].join(' ')}>
                browse forums <Icon icon={ICONS_TYPES.ARROW} style={{ marginLeft: '5px' }} />
            </a>
            <InputSearch
                value={searchForumText}
                setValue={setSearchForumText}
                onSubmit={(value) => { findTicketsByText(value, setSearchForumText, true) }}
                onCancel={() => { clearSearchText(setSearchForumText) }}
                placeholder="Search support forum"
            />
        </>
    )
}

export default SupportResourcesContent
