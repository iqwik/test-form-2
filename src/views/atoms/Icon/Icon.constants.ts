import angleLeft from './icons/angle-left.svg'
import angleRight from './icons/angle-right.svg'
import angle from './icons/angle.svg'
import arrow from './icons/arrow.svg'
import arrowDown from './icons/arrow-down.svg'
import close from './icons/close.svg'
import lifebuoy from './icons/lifebuoy.svg'
import message from './icons/message.svg'
import messages from './icons/messages.svg'
import notickets from './icons/notickets.svg'
import rectangle from './icons/rectangle.svg'
import search from './icons/search.svg'
import staff from './icons/staff.svg'
import telescope from './icons/telescope.svg'

export const ICONS_TYPES = {
    ANGLE_LEFT: 'angleLeft',
    ANGLE_RIGHT: 'angleRight',
    ANGLE: 'angle',
    ARROW: 'arrow',
    ARROW_DOWN: 'arrowDown',
    CLOSE: 'close',
    LIFEBUOY: 'lifebuoy',
    MESSAGE: 'message',
    MESSAGES: 'messages',
    NOTICKETS: 'notickets',
    RECTANGLE: 'rectangle',
    SEARCH: 'search',
    STAFF: 'staff',
    TELESCOPE: 'telescope',
} as const

export const ICONS = {
    [ICONS_TYPES.ANGLE_LEFT]: angleLeft,
    [ICONS_TYPES.ANGLE_RIGHT]: angleRight,
    [ICONS_TYPES.ANGLE]: angle,
    [ICONS_TYPES.ARROW]: arrow,
    [ICONS_TYPES.ARROW_DOWN]: arrowDown,
    [ICONS_TYPES.CLOSE]: close,
    [ICONS_TYPES.LIFEBUOY]: lifebuoy,
    [ICONS_TYPES.MESSAGE]: message,
    [ICONS_TYPES.MESSAGES]: messages,
    [ICONS_TYPES.NOTICKETS]: notickets,
    [ICONS_TYPES.RECTANGLE]: rectangle,
    [ICONS_TYPES.SEARCH]: search,
    [ICONS_TYPES.STAFF]: staff,
    [ICONS_TYPES.TELESCOPE]: telescope,
} as const
