import { IKeyword } from 'src/types'

export const selectCategories = (data: IKeyword[]) => {
  const categories: string[] = []
  data.forEach((item) => {
    if (categories.includes(item.category.S) === false) {
      categories.push(item.category.S)
    }
  })

  return categories.sort()
}

const getSubCategories = (data: IKeyword[], category: string) => {
  const dataForCategory = data.filter((item) => item.category.S === category)
  const subCategories: string[] = []
  for (let i = 0; i < dataForCategory.length; i++) {
    if (!subCategories.includes(dataForCategory[i].subCategory.S)) {
      subCategories.push(dataForCategory[i].subCategory.S)
    }
  }

  return subCategories
}

export const selectSubCategories = (data: IKeyword[], categories: string[]) => {
  const subCategories = categories.map((category) => {
    return { category: category, options: getSubCategories(data, category) }
  })

  return subCategories.flat()
}

export const selectBrands = (data: IKeyword[], subCategories: string[]) => {
  const brands: string[] = []
  subCategories.forEach((subCategory) => {
    data.forEach((item) => {
      if (
        item.keywordCategory.S === 'Brands' &&
        item.category.S === subCategory.split('__')[0] &&
        item.subCategory.S === subCategory.split('__')[1]
      ) {
        if (brands.includes(item.uiFriendlyName.S) === false) {
          brands.push(item.uiFriendlyName.S)
        }
      }
    })
  })

  return brands.sort()
}
