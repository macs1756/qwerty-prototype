



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

export enum Language {
  Uk = "Uk",
  En = "En",
  Ka = "Ka"
}

export interface IprojectElement


export interface IProjectProps {
  language:  Language.En |  Language.Ka | Language.Uk
  data: 
}
