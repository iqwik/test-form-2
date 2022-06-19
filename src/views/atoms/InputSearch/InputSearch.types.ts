import PropTypes, { InferProps } from 'prop-types'

export const InputSearchProps = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number,
}

export const InputSearchDefaultProps = {
    width: 370,
}

export type InputSearchPropsTypes = InferProps<typeof InputSearchProps>
