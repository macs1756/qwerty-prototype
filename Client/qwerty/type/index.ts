



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

enum Language {
  Uk,
  En,
  Ka
}

export interface IProjectProps {
  language:  Language.En |  Language.Ka | Language.Uk
}
