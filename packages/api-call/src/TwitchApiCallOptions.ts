/// <reference lib="dom" />

import type { RequestInit as NodeRequestInit } from 'node-fetch';

/**
 * The endpoint to call, i.e. /helix or a custom (potentially unsupported) endpoint.
 */
export type TwitchApiCallType = 'helix' | 'auth' | 'custom';

/**
 * Configuration for a single API call.
 */
export interface TwitchApiCallOptions {
	/**
	 * The URL to request.
	 *
	 * If `type` is not `'custom'`, this is relative to the respective API root endpoint. Otherwise, it is an absoulte URL.
	 */
	url: string;

	/**
	 * The endpoint to call, i.e. /helix or a custom (potentially unsupported) endpoint.
	 */
	type?: TwitchApiCallType;

	/**
	 * The HTTP method to use. Defaults to `'GET'`.
	 */
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

	/**
	 * The query parameters to send with the API call.
	 */
	query?: Record<string, string | string[] | undefined>;

	/**
	 * The JSON body to send with the API call.
	 *
	 * If `body` is also given, this will be ignored.
	 */
	jsonBody?: unknown;

	/**
	 * The scope the request needs.
	 */
	scope?: string;

	/**
	 * Whether OAuth credentials should be generated and sent with the request. Defaults to `true`.
	 */
	auth?: boolean;
}

export type TwitchApiCallFetchOptions = Omit<RequestInit | NodeRequestInit, 'headers' | 'method' | 'body'>;
