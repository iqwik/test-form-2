import React from 'react'

import { PageBlockHeader, PageBlockContent } from './components'

import s from './PageBlock.module.scss'

class PageBlock extends React.PureComponent {
    static Header = PageBlockHeader

    static Content = PageBlockContent

    render() {
        return (
            <div className={s.PageBlock}>{this.props.children}</div>
        )
    }
}

PageBlock.Header = PageBlockHeader
PageBlock.Content = PageBlockContent

export default PageBlock
