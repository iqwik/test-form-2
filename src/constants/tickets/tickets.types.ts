import { ITEMS } from '../../views/organisms/Tickets/views/atoms'

type AuthorT = {
    id: number
    display_name: string
    avatar_url: string
    is_staff: boolean
}

export type ChoosenStatus = typeof ITEMS[keyof typeof ITEMS]

export type TicketsT = {
    id: number
    title: string
    created_time: string
    created_time_utc: string
    forum: {
        id: number
        title: string
        url: string
    }
    author: AuthorT
    latest_post_author: AuthorT
    num_replies: number
    status: ChoosenStatus
    url: string
}
