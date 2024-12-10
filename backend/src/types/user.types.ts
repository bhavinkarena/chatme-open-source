import { Document } from 'mongoose';

export interface IUserSchema extends Document {
  firstName: string;
  lastName?: string;
  bio?: string;
  email: string;
  password: string;
  friends: IUserSchema[];
  profilePicture?: string;
  saltPassword: string;
  refreshToken: string;
}

export interface ICreateUserPayload {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  profilePicture?: string;
}

export interface ICreateTokenPayload {
  firstName: string;
  email: string;
  id: string;
}