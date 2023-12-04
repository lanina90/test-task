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

export interface ApiResponse {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
}