



export interface IdataElement {
  id: number
  attributes: {
    createdAt: string
    description: string
    locale: string
    publishedAt: string
    title: string
    updatedAt: string
  }
}

export interface Idata {
  data: IdataElement[]
}