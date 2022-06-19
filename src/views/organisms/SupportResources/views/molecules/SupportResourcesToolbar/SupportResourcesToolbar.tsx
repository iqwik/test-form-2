import React from 'react'
import { Icon, ICONS_TYPES } from '../../../../../atoms'

import s from './SupportResourcesToolbar.module.scss'

const SupportResourcesToolbar = () => (
    <>
        <h4>Support Resources</h4>
        <div className="d-flex">
            <span className={s.NeedHelp}>Need Help?</span>
            <a href="#" className="button" onClick={(e) => { e.preventDefault() }}>
                <Icon icon={ICONS_TYPES.LIFEBUOY} />&nbsp;&nbsp;Get Support
            </a>
        </div>
    </>
)

export default SupportResourcesToolbar
