export interface Friend {
  photoURL: string
  username: string
  isOnline: string
  about?: string
}

export interface User {
  id?: string
  email?: string
  photoURL?: string
  username: string
  password?: string
  about?: string
  isOnline: string
  friends?: Friend[]
}