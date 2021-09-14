export interface IUser {
  id: string;
  name: string;
  username: string;
}

export interface ActionUser {
  users: IUser[];
}
