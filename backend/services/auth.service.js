"use strict";
const  jsonwebtoken = require('jsonwebtoken');
const users = require("../repository/users");
const posts = require("../repository/posts");

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
				for(let user of users) {
					if(ctx.params.login === user.login  &&  ctx.params.pass === user.pass) {
						return {
							message: 'login realizado com sucesso',
							acessToken: jsonwebtoken.sign({user: users.login}, "secret")
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
				name: "string"
			},
			async handler(ctx) {
				for(let user of users) {
					if(ctx.params.login === user.login) {
						throw new Error('login ja utilizado ;/')
					}
				}

				users.push({
					login : ctx.params.login, 
					pass : ctx.params.pass,
					name : ctx.params.name
				});

				console.log(users)
				return {
					message: 'usuario registrado com sucesso!'
				}
			}

		},
		feed:{
			rest: {
				method: "GET",
				path: "/feed"
			},
			async handler(e) {
				console.log(posts)
				return posts
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
