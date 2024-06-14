export interface IPhone {
  id?: number;
  number?: number | null;
  phoneType?: PhoneType | null;
}

export class Phone implements IPhone {
  constructor(
    public id?: number,
    public number?: number | null,
    public phoneType?: PhoneType | null
  ) {}
}

export enum PhoneType {
  PERSONAL = 'Pessoal',
  RESIDENTIAL = 'Residencial',
  BUSINESS = 'Empresarial'
}

export function getAddressId(address: IPhone): number | undefined {
  return address.id;
}
