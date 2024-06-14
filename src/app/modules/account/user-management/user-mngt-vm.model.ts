export class UserMngtVM {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public authorities: string[],
    public activated: boolean) {}
}
