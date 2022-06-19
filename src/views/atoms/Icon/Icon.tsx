import React from 'react'
import { ReactSVG } from 'react-svg'
import { ICONS } from './Icon.constants'

import s from './Icon.module.scss'

const Icon = ({
    icon,
    ...iconProps
}): JSX.Element => {
    const src = ICONS[icon]

    return (
        <ReactSVG
            src={src}
            className={[s.Icon, iconProps?.className || ''].join(' ')}
            {...iconProps}
        />
    )
}

export default Icon
