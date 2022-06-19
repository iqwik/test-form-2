import React, { useCallback } from 'react'

import Icon from '../Icon/Icon'
import { ICONS_TYPES } from '../Icon/Icon.constants'
import {
    InputSearchPropsTypes,
    InputSearchProps,
    InputSearchDefaultProps,
} from './InputSearch.types'

import s from './InputSearch.module.scss'

const InputSearch = ({
    value,
    setValue,
    onSubmit,
    onCancel,
    placeholder,
    width,
}: InputSearchPropsTypes): JSX.Element => {
    const submit = useCallback(() => {
        if (value?.length) {
            onSubmit(value)
        }
    }, [value])

    return (
        <div
            className={[s.InputSearch, value?.length ? s.Filled : ''].join(' ')}
            style={{ width: `${width}px` }}
        >
            <Icon
                icon={ICONS_TYPES.SEARCH}
                onClick={submit}
                style={{ cursor: 'pointer' }}
            />
            <input
                type="text"
                placeholder={placeholder || 'search'}
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                onKeyPress={({ key = null }) => {
                    if (key === 'Enter') {
                        submit()
                    }
                }}
            />
            <Icon
                icon={ICONS_TYPES.CLOSE}
                className={s.Close}
                onClick={onCancel}
            />
        </div>
    )
}

InputSearch.props = InputSearchProps
InputSearch.defaultProps = InputSearchDefaultProps

export default InputSearch
