import React, { useMemo, useState } from 'react'

import { Icon, ICONS_TYPES } from '../../../../../atoms'

import s from './TicketsDropDown.module.scss'
import TicketsDropDownService from './TicketsDropDown.service'

const TicketsDropDown = ({
    value,
    setValue,
    options,
}) => {
    const [visibleList, setVisibleList] = useState(false)

    const optionsByValue = useMemo(() => (
        options.reduce((acc, option) => ({ ...acc, [option.value]: option }), {})
    ), [options])

    const list = useMemo(() => (
        TicketsDropDownService.getElements({
            value,
            setValue,
            options,
            optionsByValue,
        })
    ), [
        value,
        visibleList,
        options,
        optionsByValue,
    ])

    return (
        <div
            className={[s.selectWrapper, visibleList ? s.visibleList : ''].join(' ')}
            onClick={() => { setVisibleList(!visibleList) }}
        >
            <Icon className={s.Angle} icon={ICONS_TYPES.ANGLE} />
            <ul>
                {visibleList ? list : TicketsDropDownService.renderOption(value, optionsByValue, 'label', true)}
            </ul>
        </div>
    )
}

export default TicketsDropDown
