import React from 'react'

import { Icon, ICONS_TYPES } from '../../../../../atoms'

import s from './TicketsPagination.module.scss'

const TicketsPagination = (): JSX.Element => (
    <div className={s.Pagination}>
        <ul>
            <li className={s.Active}><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
        </ul>
        <div className={s.Nav}>
            <span>1-50 of 149</span>
            <div className={s.Arrows}>
                <span><Icon icon={ICONS_TYPES.ANGLE_LEFT} /></span>
                <a href="#"><Icon icon={ICONS_TYPES.ANGLE_RIGHT} /></a>
            </div>
        </div>
    </div>
)

export default TicketsPagination
