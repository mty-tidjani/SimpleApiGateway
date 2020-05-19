export class TheError extends Error {
  status: Number;

  constructor(message:string, status: Number = 500) {
    super(message);
    this.status = status;
  }
}

export const randomString = () => {

};
