import { writable } from 'svelte/store';

export const form = {
	email: {
		value: writable(''),
		valid: writable(false),
		type: 'email',
		regex:
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		text: 'Enter your email'
	},
	password: {
		value: writable(''),
		valid: writable(false),
		type: 'password',
		regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
		text: 'Password'
	},
	confirm: {
		value: writable(''),
		valid: writable(false),
		type: 'password',
		regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
		text: 'Confirm password'
	}
};
