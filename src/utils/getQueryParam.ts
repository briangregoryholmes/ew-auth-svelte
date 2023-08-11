import { Flow } from '../types/app';

export function getQueryParam(name: string): Flow | null {
	const urlParams = new URLSearchParams(window.location.search);

	const flow = urlParams.get(name);

	if (flow === Flow.Login || flow === Flow.Reset || flow === Flow.Signup) {
		return flow;
	}

	return null;
}
