export interface User {
  login: UserLogin;
  name: UserName;
  gender: string;
  registered: UserRegistered;
}

interface UserLogin {
  uuid: string;
}

interface UserName {
  first: string;
  last: string;
}

interface UserRegistered {
  date: string;
}
