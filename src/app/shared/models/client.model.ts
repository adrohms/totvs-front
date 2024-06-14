import { IPerson } from "./person.model";

export enum InterestType {
  AGRO = "Agronegócio",
  CONSTRUCTION = "Construção",
  DISTRIBUTION = "Distribuição",
  EDUCATION = "Educação",
  FINANCIAL = "Financeiro",
  RETAIL = "Varejo",
  OTHER = "Outro"
}

export enum OriginType {
  LINKEDIN = "LinkedIn",
  INSTAGRAM = "Instagram",
  FACEBOOK = "Facebook",
  OTHER = "Outro"
}

export interface IClient {
  id?: number;
  origin?: OriginType | null;
  interest?: InterestType | null;
  person?: IPerson | null
}

export class Client implements IClient {
  constructor(
    public id?: number,
    public origin?: OriginType | null,
    public interest?: InterestType | null,
    public person?: IPerson | null
  ) {}
}

export interface IClientParams {
  id?: number;
  name?: string | null;
  email?: string | null;
}

export function getClientId(client: IClient): number | undefined {
  return client.id;
}
