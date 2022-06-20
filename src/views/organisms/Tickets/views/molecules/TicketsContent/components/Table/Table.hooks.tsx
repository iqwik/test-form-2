import React, {
    useCallback, useContext, useEffect, useState,
} from 'react'
import { cloneDeep } from 'lodash'

import { capitalizeFirstLetter, parseDate, TicketsT } from '../../../../../../../../constants'
import { AppContext } from '../../../../../../../../providers'
import { Icon, ICONS_TYPES } from '../../../../../../../atoms'
import { ITEMS_COLORS } from '../../../../atoms'

import { COLUMNS, COLUMNS_LABELS, sortRows } from './Table.constants'
import CellReplies from './CellReplies/CellReplies'

type CurrentSortedColumnType = {
    fieldName: typeof COLUMNS[keyof typeof COLUMNS] | null
    direction: number
}

const defaultCurrentSortedColumn = { fieldName: null, direction: 0 }

export const useTable = (s) => {
    const { tickets } = useContext(AppContext)
    const [rows, setRows] = useState<TicketsT[]>([])

    useEffect(() => {
        setRows(tickets)
    }, [tickets])

    const [currentSortedColumn, setCurrentSortedColumn] = useState<CurrentSortedColumnType>(defaultCurrentSortedColumn)

    useEffect(() => {
        const { fieldName, direction } = currentSortedColumn
        if (fieldName) {
            const initialRows = cloneDeep(tickets)
            if (direction === 0) {
                setRows(initialRows)
            } else {
                const sortedRows = sortRows({
                    rows: initialRows,
                    fieldName,
                    isMoment: fieldName === COLUMNS.CREATED_TIME_UTC,
                    direction,
                })

                setRows(sortedRows)
            }
        }
    }, [currentSortedColumn])

    const renderHead = useCallback(() => (
        <tr>
            {Object.entries(COLUMNS_LABELS).map(([fieldName, label], index) => (
                <th
                    key={`column-${fieldName}-${index}`}
                    className={[s.column, s[fieldName], index < 3 ? s.sortable : ''].join(' ')}
                    {...(index < 3
                        ? {
                            onClick: () => {
                                setCurrentSortedColumn({
                                    fieldName,
                                    direction: (
                                        // eslint-disable-next-line no-nested-ternary
                                        currentSortedColumn.fieldName === fieldName && currentSortedColumn.direction < 2
                                            ? currentSortedColumn.direction + 1
                                            : currentSortedColumn.direction > 0 ? 0 : 1
                                    ),
                                })
                            },
                        } : {}
                    )}
                >
                    <div>
                        {label}
                        {currentSortedColumn.fieldName === fieldName && currentSortedColumn.direction > 0 && (
                            <Icon
                                className={[s.sortIcon, currentSortedColumn.direction === 2 ? s.Up : ''].join(' ')}
                                icon={ICONS_TYPES.ARROW_DOWN}
                            />
                        )}
                    </div>
                </th>
            ))}
        </tr>
    ), [currentSortedColumn])

    const renderBody = useCallback(() => (
        rows.map(({
            id,
            title: ticket,
            forum: { title: forumTitle },
            status,
            created_time_utc,
            latest_post_author,
            num_replies,
        }) => (
            <tr key={`row-${id}`} className={s.row}>
                <td>
                    <div className={s.TicketName}>
                        <a href="#" className="link">{ticket}</a>
                        <small>{forumTitle}</small>
                    </div>
                </td>
                <td>
                    <div className={s.statusWrapper}>
                        <span
                            className={s.Status}
                            style={ITEMS_COLORS[capitalizeFirstLetter(status)]}
                        >
                            {status}
                        </span>
                    </div>
                </td>
                <td className={s[COLUMNS.CREATED_TIME_UTC]}>
                    {parseDate(created_time_utc)}
                </td>
                <td>
                    <CellReplies
                        {...latest_post_author}
                        num_replies={num_replies}
                    />
                </td>
            </tr>
        ))
    ), [rows, currentSortedColumn])

    return {
        renderHead,
        renderBody,
    }
}
