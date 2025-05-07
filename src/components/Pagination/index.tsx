'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const PaginationLink = ({ ...props }) => (
  <PaginationItem>
    <Link href={props.href}>{props.children}</Link>
  </PaginationItem>
)

export function Pages({ total, size }: { total: number; size: number }) {
  const searchParams = useSearchParams()
  const currentPage = Number.parseInt(searchParams.get('page') || '0', 10)
  const pages = Math.ceil(total / size)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href='#' />
        {Array.from({ length: pages }, (_, i) => (
          <PaginationLink href={`?page=${i + 1}`} key={i}>
            {i + 1} {i + 1 === currentPage ? '(current)' : ''}
          </PaginationLink>
        ))}
        <PaginationNext href='#' />
      </PaginationContent>
    </Pagination>
  )
}
