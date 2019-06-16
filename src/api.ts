import { IUser, RawUser } from "./types";

export const url = "https://jsonplaceholder.typicode.com/users";

class User implements IUser {
  id = 0;
  name = "";
  email = "";
  city = "";
  company = "";
  constructor(raw: RawUser) {
    this.id = raw.id;
    this.name = raw.name;
    this.email = raw.email;
    this.city = raw.address.city;
    this.company = raw.company.name;
  }
}

export const fetchUserData = async () => {
  const raw = await fetch(url);
  const usersJson: RawUser[] = await raw.json();
  const usersData = usersJson.map(userJson => new User(userJson));
  return usersData;
};
