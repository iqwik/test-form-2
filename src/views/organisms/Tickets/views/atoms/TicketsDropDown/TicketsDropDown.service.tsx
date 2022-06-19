import React from 'react'
import { isFunction } from 'lodash'

import { ITEMS, ITEMS_COLORS, ITEMS_LABELS } from './TicketsDropDown.constants'

export const defaultOptionValue = { label: null, value: null, quantity: null }

type ChoosenStatus = typeof ITEMS[keyof typeof ITEMS]
export type TicketsDropDownSingleElementProps = {
    label: typeof ITEMS_LABELS[keyof typeof ITEMS_LABELS]
    value: ChoosenStatus
    quantity: number | null
}
type TicketsDropDownServiceGetElementProps = Pick<TicketsDropDownSingleElementProps, 'value'> & {
    setValue: React.Dispatch<Pick<TicketsDropDownSingleElementProps, 'value'>>
    options: TicketsDropDownSingleElementProps[]
    optionsByValue: TicketsDropDownSingleElementProps
}

const TicketsDropDownService = {
    handledElements: [],
    tickElement: { ...defaultOptionValue },
    value: defaultOptionValue.value,
    setValue: () => {},
    options: [],
    optionsByValue: {},

    initProps({
        value,
        setValue,
        options,
        optionsByValue,
    }) {
        this.value = value
        this.setValue = setValue
        this.options = options
        this.optionsByValue = optionsByValue
    },

    renderOption(value, optionsByValue, renderProp = 'value', withCounterIndent = false) {
        const option = optionsByValue[value]
        const counterStyle = ITEMS_COLORS[value]
        const onClick = () => {
            if (isFunction(this.setValue)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.setValue(value)
            }
        }

        return (
            <li
                key={`option-${option.value}`}
                onClick={onClick}
            >
                {option[renderProp]}
                <span
                    className={['counter', withCounterIndent ? 'indent' : ''].join(' ')}
                    style={counterStyle}
                >
                    {option.quantity}
                </span>
            </li>
        )
    },

    getFirstElement() {
        const [firstElement]: TicketsDropDownServiceGetElementProps[] = this.options
        const choosenValue = this.value

        return [
            this.renderOption(this.value, this.optionsByValue),
            ...(choosenValue !== ITEMS.ALL ? [this.renderOption(firstElement.value, this.optionsByValue)] : []),
        ]
    },

    getAnotherElement() {
        const { value = null } = this.tickElement
        const choosenValue = this.value

        return (value !== choosenValue ? [this.renderOption(value, this.optionsByValue)] : [])
    },

    getElements(props: TicketsDropDownServiceGetElementProps) {
        this.initProps(props)

        return (
            this.options.reduce((handledElements, tickElement, index) => {
                this.handledElements = handledElements
                this.tickElement = tickElement

                return [
                    ...this.handledElements,
                    ...(index === 0 ? this.getFirstElement() : this.getAnotherElement()),
                ] as never[]
            }, [])
        )
    },
}

export default TicketsDropDownService
