import { verify, sign } from 'jsonwebtoken';

export const makeToken = (payload: Object, secret: string, expires: string) => {
  const token = sign(payload, secret, { expiresIn: expires });
  return token;
};

export const decodeToken = (token: string, secret: string) => new Promise((resolve, reject) => {
  verify(token, secret, {
    ignoreExpiration: false,
  }, (err, decodedToken) => {
    if (err) reject(err);
    resolve(decodedToken);
  });
});
