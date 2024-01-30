export interface IdataElement {
  id: number
  attributes: {
    createdAt: string
    locale: string
    publishedAt: string
    updatedAt: string
    headerButtonText: string
    initial_title: string,
    initial_p: string
    navbar_link_1: string
    navbar_link_2: string
    navbar_link_3: string
    navbar_link_4: string
    footer_terms_of_use: string
    footer_title: string
  }
}

export enum Language {
  Uk = "Ru",
  En = "En",
  Ka = "Ka"
}


export interface IpageSingleProps {
  title: string
  imageUrl: string
  description: string
}


export interface IlabelsProps {
  data: IdataElement[]
}