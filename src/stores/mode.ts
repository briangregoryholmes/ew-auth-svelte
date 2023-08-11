import { Flow } from '../types/app';
import { getQueryParam } from '../utils/getQueryParam';
import { writable } from 'svelte/store';

export const flow = writable<Flow>(getQueryParam('flow') ?? Flow.Signup);

export const emailSent = writable(false);
