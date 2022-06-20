import { useCallback, useMemo, useState } from 'react'

export type UsePaginationPropsT = {
    contentPerPage: number,
    count: number,
}
export type UsePaginationReturnT = {
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
    page: number;
}
type UsePagination = (UsePaginationProps: UsePaginationPropsT) => (UsePaginationReturnT)

const getNewPageNum = (pageNum: number, pageCount: number, moveForward: boolean) => {
    if (moveForward) {
        if (pageNum === pageCount) {
            return pageNum
        }
        return pageNum + 1
    }

    if (pageNum === 1) {
        return pageNum
    }

    return pageNum - 1
}

export const usePagination: UsePagination = ({
    contentPerPage,
    count,
}) => {
    const [page, setPage] = useState(1)

    const pageCount = useMemo(() => Math.ceil(count / contentPerPage), [count, contentPerPage])
    const lastContentIndex = useMemo(() => page * contentPerPage, [page, contentPerPage])
    const firstContentIndex = useMemo(() => lastContentIndex - contentPerPage, [lastContentIndex, contentPerPage])

    const changePage = useCallback((moveForward: boolean) => {
        const newPageNum = getNewPageNum(page, pageCount, moveForward)
        setPage(newPageNum)
    }, [page, pageCount])

    const setPageNum = useCallback((num: number) => {
        if (num > pageCount) {
            setPage(pageCount)
        } else if (num < 1) {
            setPage(1)
        } else {
            setPage(num)
        }
    }, [pageCount])

    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        firstContentIndex,
        lastContentIndex,
        page,
        setPage: setPageNum,
    }
}
