import React, { useContext, useMemo } from 'react'

import { AppContext } from '../../../../../../providers'
import { Icon, ICONS_TYPES } from '../../../../../atoms'

import s from './TicketsPagination.module.scss'

const TicketsPagination = (): JSX.Element => {
    const {
        count,
        totalPages,
        nextPage,
        prevPage,
        firstContentIndex,
        lastContentIndex,
        page,
        setPage,
    } = useContext(AppContext)

    const pagesNums = useMemo(() => {
        const nums: JSX.Element[] = []
        for (let i = 1; i <= totalPages; i += 1) {
            if (i === page) {
                nums.push(
                    <li key={`page-num-${page}`} className={s.Active}>
                        <span>{page}</span>
                    </li>,
                )
            } else {
                nums.push(
                    <li key={`page-num-${i}`}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setPage(i)
                            }}
                        >
                            {i}
                        </a>
                    </li>,
                )
            }
        }

        return nums
    }, [page, totalPages])

    const pageArrows = useMemo(() => (
        <>
            <button type="button" onClick={prevPage} disabled={page === 1}>
                <Icon icon={ICONS_TYPES.ANGLE_LEFT} />
            </button>
            <button type="button" onClick={nextPage} disabled={page === totalPages}>
                <Icon icon={ICONS_TYPES.ANGLE_RIGHT} />
            </button>
        </>
    ), [page, totalPages])

    return (
        <div className={s.Pagination}>
            <ul>
                {pagesNums}
            </ul>
            <div className={s.Nav}>
                <span>{firstContentIndex + 1}-{lastContentIndex < count ? lastContentIndex : count} of {count}</span>
                <div className={s.Arrows}>
                    {pageArrows}
                </div>
            </div>
        </div>
    )
}

export default TicketsPagination
