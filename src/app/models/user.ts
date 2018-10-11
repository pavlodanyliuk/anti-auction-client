export class User {
  id: number;
  login: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  birth?: Date;
  phone?: string;
  sex?: boolean;
  image?: string;
  notificationSettIsOn: boolean;
  regDate: Date;
}
