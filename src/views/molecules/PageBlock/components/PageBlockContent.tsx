import React from 'react'

import s from '../PageBlock.module.scss'

const PageBlockContent = ({ children }) => (<div className={[s.Content, 'content'].join(' ')}>{children}</div>)

export default PageBlockContent
