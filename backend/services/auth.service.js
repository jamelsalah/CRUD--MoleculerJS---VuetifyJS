"use strict";
const  jsonwebtoken = require('jsonwebtoken');
const repository = require("../repository");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */



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
		login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			
			params: {
				login: "string",
				pass: [{type: "string"},
						{type: "number"}
				]
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				for(let user of repository) {
					if(ctx.params.login === user.login  &&  ctx.params.pass === user.pass) {
						return {
							message: 'login realizado com sucesso',
							acessToken: jsonwebtoken.sign({user: repository.login}, "secret")
						};
					}
				}

				throw new Error (`login ou senha incorretos`);
			}
		},

		register: {
			rest: { 
					method: "POST",
					path: "/register"
			},
			params: {
				login: "string",
				pass: [{type: "string"},
						{type: "number"}
				],
				pass2: [{type: "string"},
						{type: "number"}
				],
			},
			async handler(ctx) {
				for(let user of repository) {
					if(ctx.params.login === user.login) {
						throw new Error('login ja utilizado ;/')
					}
				}

				repository.push({
					login :ctx.params.login, 
					pass : ctx.params.pass
				});

				console.log(repository)
				return {
					message: 'usuario registrado com sucesso!'
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
