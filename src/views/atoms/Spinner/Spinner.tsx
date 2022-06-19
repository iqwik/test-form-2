import * as React from 'react'

import s from './Spinner.module.scss'

const Spinner = ({ visible = false }: { visible: boolean }): JSX.Element => (
    <div className={[s.spinnerWrapper, visible ? s.spinnerVisible : ''].join(' ')}>
        <div className={s.Spinner} />
    </div>
)

export default Spinner
