import { ACCESS_TOKEN_JWT_KEY } from '@/constant';
import jwt from 'jsonwebtoken';

export const checkHasProperties = (object: Object) => {
  const keys = Object.keys(object);
  return !!keys.length;
};

export const verifyAccessToken = (access_token: string) => {
  return jwt.verify(access_token, ACCESS_TOKEN_JWT_KEY);
};
