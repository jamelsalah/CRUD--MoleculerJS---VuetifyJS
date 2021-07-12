"use strict";
const  jsonwebtoken = require('jsonwebtoken');
const repository = require("../repository")

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */



module.exports = {
	
	name: "login",

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
				if(ctx.params.login == repository.login  &&  ctx.params.pass == repository.pass) {
					return {
						message: 'login realizado com sucesso',
						acessToken: jsonwebtoken.sign({user: repository.login}, "secret")
					};
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
