'use client'

import { Category } from '../../../../payload/payload-types'
import CheckBox from '../../../_components/CheckBox'
import { HR } from '../../../_components/HR'
import { RadioButton } from '../../../_components/RadioButton'
import { useFilter } from '../../../_providers/Filters'
import classes from './index.module.scss'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters, sort, setSort } = useFilter()
  const handleCategory = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedFilters = categoryFilters.filter(id => id !== categoryId)
      setCategoryFilters(updatedFilters)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }
  const handleSort = (value: string) => setSort(value)

  return (
    <div className={classes.Filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)
            return (
              <CheckBox
                key={category.id}
                label={category.title}
                value={category.id}
                onClickHandler={handleCategory}
                isSelected={isSelected}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  )
}
export default Filters
