import type { Auth0Error } from 'auth0-js';

export enum Flow {
	Signup = 'signup',
	Login = 'login',
	Reset = 'reset'
}

export type Callback = (err: Auth0Error) => void;
