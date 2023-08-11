import { WebAuth } from 'auth0-js';
import type { AuthOptions } from 'auth0-js';

interface InternalOptions {
	protocol: string;
	response_type: string;
	prompt: string;
	scope: string;
	_csrf: string;
	leeway: number;
}

interface Config {
	auth0Domain: string;
	auth0Tenant: string;
	authorizationServer: {
		issuer: string;
	};
	callbackURL: string;
	clientID: string;
	internalOptions: InternalOptions;
}

export const connection = 'Username-Password-Authentication';

const config: Config = {
	auth0Domain: import.meta.env.VITE_AUTH0_DOMAIN,
	auth0Tenant: import.meta.env.VITE_AUTH0_TENTANT,
	authorizationServer: {
		issuer: import.meta.env.VITE_AUTH0_DOMAIN
	},
	callbackURL: import.meta.env.VITE_AUTH0_CALLBACK,
	clientID: import.meta.env.VITE_AUTH0_CLIENT_ID,
	internalOptions: {
		protocol: 'oauth2',
		response_type: 'code',
		prompt: 'consent',
		scope: 'openid profile',
		_csrf: 'r9gbNHgp-HgC-DdCxeGuRTqy7TuI9RqbN_0s',
		leeway: 60
	}
};

console.log(config, import.meta.env);

if (window.location.hostname !== 'localhost') {
	const decodedConfig = JSON.parse(
		decodeURIComponent(escape(window.atob('@@config@@')))
	) as Config;

	const leeway = decodedConfig.internalOptions.leeway;

	if (leeway) {
		const convertedLeeway = parseInt(leeway.toString());

		if (!isNaN(convertedLeeway)) {
			decodedConfig.internalOptions.leeway = convertedLeeway;
		}
	}

	Object.assign(config, decodedConfig);
	console.log(config);
}

// Create params for Auth0 client
const params: AuthOptions = Object.assign(
	{
		overrides: {
			__tenant: config.auth0Tenant,
			__token_issuer: config.authorizationServer.issuer
		},
		domain: config.auth0Domain,
		clientID: config.clientID,
		redirectUri: config.callbackURL,
		responseType: 'code'
	},
	config.internalOptions
);

// Initialize Auth0 client
export const webAuth = new WebAuth(params);
