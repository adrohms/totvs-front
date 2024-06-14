import { IAddress } from "./address.model";
import { IPhone } from "./phone.mode";

export interface IPerson {
  id?: number;
  name?: string | null;
  taxId?: string | null;
  personType?: PersonType | null;
  email?: string | null;
  phones?: IPhone[] | null;
  addresses?: IAddress[] | null;
}

export enum PersonType {
  NATURAL_PERSON = "Pessoa Física",
  LEGAL_PERSON = "Perssoa Jurídica"
}

export class Person implements IPerson {
  constructor(
    public id?: number,
    public name?: string | null,
    public taxId?: string | null,
    public personType?: PersonType | null,
    public email?: string | null,
    public phones?: IPhone[] | null,
    public addresses?: IAddress[] | null,
  ) {}
}

export function getPersonId(person: IPerson): number | undefined {
  return person.id;
}
