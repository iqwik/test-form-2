import moment from 'moment'

moment.updateLocale('en', {
    calendar: {
        lastDay: '[Yesterday] @ LT',
        sameDay: '[Today] @ LT',
        nextDay: '[Tomorrow] @ LT',
        sameElse: 'MMMM D @ LT',
    },
})

export const parseDate = (dateAsString) => moment(new Date(dateAsString)).calendar()
