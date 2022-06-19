/* eslint-disable no-useless-escape */
declare module 'core-js/stable'
declare module 'regenerator-runtime/runtime'

declare module '*.scss'

declare module '*.module.scss' {
    const content: Record<string, string>

    export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.svg' {
    import React = require('react')

    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
}
