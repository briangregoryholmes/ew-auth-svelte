import { webAuth, connection } from '../lib/auth0';
import { emailSent } from '../stores/mode';
import type { Auth0Callback, Auth0Error } from 'auth0-js';

type Callback = Auth0Callback<Auth0Error>;

export function handleReset(email: string, errorCallback: Callback) {
	webAuth.changePassword({ connection, email }, errorCallback);
	emailSent.set(true);
}

export function handleSignup(
	email: string,
	password: string,
	errorCallback: Callback
) {
	webAuth.redirect.signupAndLogin(
		{ connection, email, password },
		errorCallback
	);
}

export function handleLogin(
	username: string,
	password: string,
	realm: string,
	errorCallback: Callback
) {
	webAuth.login({ realm, username, password }, errorCallback);
}
