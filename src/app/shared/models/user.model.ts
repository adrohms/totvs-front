import { Person } from "src/app/shared/models/person.model";

export interface IUser {
  id?: number | null;
  authorities?: string[];
  person?: Person | null;
}


export class User implements IUser {
  constructor(
    public id?: number | null,
    public authorities?: string[],
    public person?: Person | null,
  ) {}
}
