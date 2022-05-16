export type IReport = {
  id: number
  title: string
  date: string
}

export interface IKeywordData {
  id: number
  keyword?: string
  transformations?: string
}

export interface IKeyword {
  uiFriendlyName: {
    S: string
  }
  transformations: {
    S: string
  }
  keywordCategory: {
    S: string
  }
  identifier: {
    S: string
  }
  createdAtUTC: {
    S: string
  }
  subCategory: {
    S: string
  }
  keywordDBVersion: {
    S: string
  }
  category: {
    S: string
  }
  keywordName: {
    S: string
  }
  updatedAtUTC: {
    S: string
  }
  keywordKey: {
    S: string
  }
  mainSubset: {
    S: string
  }
}

export interface ICategory {
  id: string
  name: string
}

export interface ISubCategory {
  category: string
  subCategory: string
}

export interface IBrand {
  id: string
  name: string
}

export interface ICommunity {
  id: string
  name: string
}

export interface Report {
  id: string
  name: string
  category: string[]
  subcategories: string[]
  brand: string[]
  start_date: Date | null
  end_date: Date | null
  campaign_id: string
  keywords: object[]
  category_conversation: number
  brand_conversation: number
  brand_mentions: number
  brand_sov: any
  createdAt?: Date
  updatedAt?: Date
}
