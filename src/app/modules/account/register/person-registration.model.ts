import { Person } from "src/app/shared/models/person.model";

export class PersonRegistration {
  constructor(
    public id?: number | null,
    public login?: string,
    public password?: string,
    // Everyone starts as USER and the ADMIN will allow and give the right authoritie
    public authorities: string[] = ["USER"],
    public person?: Person | null,
  ) {}
}
