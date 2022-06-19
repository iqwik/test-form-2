import moment from 'moment'

export const COLUMNS = {
    TITLE: 'title',
    STATUS: 'status',
    CREATED_TIME_UTC: 'created_time_utc',
}

export const COLUMNS_LABELS = {
    [COLUMNS.TITLE]: 'ticket',
    [COLUMNS.STATUS]: COLUMNS.STATUS,
    [COLUMNS.CREATED_TIME_UTC]: 'created on',
    REPLIES: 'replies',
}

export const sortRows = ({
    rows,
    fieldName,
    isMoment = false,
    direction = 1,
}) => {
    const orderByDirection = {
        1: (a, b) => (isMoment ? moment(a[fieldName]).valueOf() - moment(b[fieldName]).valueOf() : a[fieldName].localeCompare(b[fieldName])),
        2: (a, b) => (isMoment ? moment(b[fieldName]).valueOf() - moment(a[fieldName]).valueOf() : b[fieldName].localeCompare(a[fieldName])),
    }

    const func = orderByDirection[direction]

    return rows.sort((a, b) => func?.(a, b))
}
