type TRole = {
  name: string
}

export type GTUser = {
  avatar: string
  created_at: Date
  email: string
  id: string
  name: string
  roles?: TRole[]
}

export type GTPost = {
  content: string
  created_at: Date
  id: string
  user: GTUser
}

export type GTProject = {
  id: string
  name: string
  image: string
  year: BigInteger
  project_url: string
  creted_at: Date
  project_type: TProjectType
}


type TProjectType = {
  name: string
  created_at: Date
}
