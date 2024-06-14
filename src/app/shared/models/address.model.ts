export interface IAddress {
  id?: number;
  street?: string | null;
  district?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  zipCode?: string | null;
  addressType?: AddressType | null
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public street?: string | null,
    public district?: string | null,
    public city?: string | null,
    public state?: string | null,
    public country?: string | null,
    public zipCode?: string | null,
    public addressType?: AddressType | null
  ) {}
}

export enum AddressType {
  RESIDENTIAL = 'Residencial',
  BUSINESS = 'Empresarial'
}

export function getAddressId(address: IAddress): number | undefined {
  return address.id;
}
