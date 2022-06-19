import React from 'react'

import Icon from '../Icon/Icon'
import { ICONS_TYPES } from '../Icon/Icon.constants'

import s from './HelpButton.module.scss'

const HelpButton = (): JSX.Element => (
    <button type="button" className={s.HelpButton}>
        <Icon icon={ICONS_TYPES.MESSAGE} />
        Help
    </button>
)

export default HelpButton
