type GRole = {
  name: string
}

export type GUser = {
  avatar: string
  created_at: Date
  email: string
  id: string
  name: string
  roles?: GRole[]
}

export type GPost = {
  content: string
  created_at: Date
  id: string
  user: GUser
}

export type GProject = {
  id: string
  name: string
  image: string
  year: BigInteger
  project_url: string
  creted_at: Date
  project_type: GProjectType
}


type GProjectType = {
  name: string
  created_at: Date
}
