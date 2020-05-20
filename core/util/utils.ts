export class TheError extends Error {
  status: number;

  constructor(message:string, status: number = 500) {
    super(message);
    this.status = status;
  }
}

export const randomString = () => {

};
