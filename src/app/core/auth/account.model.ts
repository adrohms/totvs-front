export class Account {
  constructor(
    public id: number,
    public email: string,
    public authorities: string[],
  ) {}
}
