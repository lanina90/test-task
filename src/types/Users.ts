export type User = {
  email: string,
  id: number,
  name: string,
  phone: string,
  photo: string,
  position: string,
  position_id: number,
  registration_timestamp:number
}

export interface UserCardProps{
  email: string,
  name: string,
  phone: string,
  photo: string,
  position: string,
}