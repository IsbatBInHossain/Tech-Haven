'use client'

import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filters'

const CategoryCard = ({ category }: { category: Category }) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      onClick={() => setCategoryFilters([category.id])}
      style={{ backgroundImage: `url(${media.url})` }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}
export default CategoryCard
