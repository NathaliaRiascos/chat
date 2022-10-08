export interface Friend {
  photoURL: string
  username: string
  isOnline: string
}

export interface User {
  id?: string
  email?: string
  photoURL?: string
  username: string
  password?: string
  isOnline: string
  friends?: Friend[]
}