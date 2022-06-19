export const ITEMS = {
    ALL: 'All',
    OPEN: 'Open',
    FEEDBACK: 'Feedback',
    RESOLVED: 'Resolved',
} as const

export const ITEMS_LABELS = {
    [ITEMS.ALL]: `${ITEMS.ALL} Tickets`,
    [ITEMS.OPEN]: ITEMS.OPEN,
    [ITEMS.FEEDBACK]: ITEMS.FEEDBACK,
    [ITEMS.RESOLVED]: ITEMS.RESOLVED,
} as const

export const ITEMS_COLORS = {
    [ITEMS.ALL]: {
        backgroundColor: '#E6E6E6',
        color: '#000',
    },
    [ITEMS.OPEN]: {
        backgroundColor: 'var(--link-color)',
        color: '#FFF',
    },
    [ITEMS.FEEDBACK]: {
        backgroundColor: '#9026B1',
        color: '#FFF',
    },
    [ITEMS.RESOLVED]: {
        backgroundColor: '#52D194',
        color: '#FFF',
    },
} as const
