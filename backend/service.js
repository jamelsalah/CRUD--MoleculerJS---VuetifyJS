"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

const dataState = {
	login : "james",
	pass : "1234"
}

module.exports = {
	
	name: "auth",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			
			params: {
				login: "string",
				pass: [{type: "string"},
						{type: "number"

				}]
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				if(ctx.params.login == dataState.login  &&  ctx.params.pass == dataState.pass) {
					return 'login realizado com sucesso'
				} else {
					throw new Error (`login ou senha incorretos`);
				}
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
