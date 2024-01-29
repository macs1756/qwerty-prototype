



export interface IdataElement {
  id: number
  attributes: {
    createdAt: string
    locale: string
    publishedAt: string
    updatedAt: string
    headerButtonText: string
  }
}


export enum Language {
  Uk = "Uk",
  En = "En",
  Ka = "Ka"
}

export interface IpageProps {
  data: IdataElement[]
  projectsData: IprojectElement[]
}

export interface IsingleWrapper {
  projectData: IprojectElement
}

export interface IprojectElement {
  id: number
  attributes: {
    createdAt: string
    description: string
    locale: string
    publishedAt: string
    title: string
    updatedAt: string
    image: {
      data: {
        id: number
        attributes: {
          name: string
          url: string
        }
      }
    }
  }
}


export interface IProjectProps {
  language: Language.En | Language.Ka | Language.Uk
  data: IprojectElement[]
}


export interface IpageSingleProps {
  title: string
  imageUrl: string
  description: string
}


export interface IheaderProps {
  data: IdataElement[]
}