import * as React from 'react'

import { useTable } from './Table.hooks'

import './Table.scss'
import s from './Table.module.scss'

const Table = (): JSX.Element => {
    const { renderHead, renderBody } = useTable(s)

    return (
        <table className={s.TicketsTable}>
            <thead>
                {renderHead()}
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}

export default Table
