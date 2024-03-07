export type GRole = {
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
