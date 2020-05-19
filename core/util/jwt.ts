import { verify } from 'jsonwebtoken';

export const makeToken = (epires: string) => {

};

export const decodeToken = (token: string, secret: string) => new Promise((resolve, reject) => {
  verify(token, secret, {
    ignoreExpiration: false,
  }, (err, decodedToken) => {
    if (err) reject(err);
    resolve(decodedToken);
  });
});
