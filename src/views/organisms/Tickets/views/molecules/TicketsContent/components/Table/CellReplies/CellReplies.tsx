import React from 'react'

import { Icon, ICONS_TYPES } from '../../../../../../../../atoms'

import s from './CellReplies.module.scss'

const CellReplies = ({
    avatar_url,
    display_name,
    is_staff,
    num_replies,
}) => (
    <div className={s.CellReplies}>
        <img className={s.Avatar} src={avatar_url} alt={`${display_name} avatar`} />
        <span className={s.Username}>Last By {display_name}</span>
        <span className={s.wrapperReplies}>
            <span className={s.NumReplies}>
                {num_replies}
            </span>
            <Icon icon={ICONS_TYPES.RECTANGLE} />
        </span>
        {is_staff && (
            <span className={s.Staff}>
                <Icon icon={ICONS_TYPES.STAFF} />&nbsp;staff
            </span>
        )}
    </div>
)

export default CellReplies
