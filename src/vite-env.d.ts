/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_AUTH0_DOMAIN: string;
	readonly VITE_AUTH0_TENTANT: string;
	readonly VITE_AUTH0_CLIENT_ID: string;
	readonly VITE_AUTH0_CALLBACK: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
