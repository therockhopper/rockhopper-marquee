import Router from '@frontend.js/router'
import Component from '@frontend.js/core'
import template from "./index.html"

new Router([{
	route: '',
	load: () => {
		location.hash = '/home'
	},
	unload: () => {
		console.log('leaving /')
	}
}, {
	route: 'home',
	load: (params) => {
		console.log('home route', params)
	},
	unload: () => {
		console.log('leaving home route')
	}
}, {
	route: 'test1/{{foo}}/{{bar}}',
	load: (params) => {
		console.log('test 1 route', params)
	},
	unload: () => {
		console.log('leaving test 1 route')
	}
}, {
	route: '*',
	load: () => {
		console.log('unknown route')
	},
	unload: () => {
		console.log('leaving unknown route')
	}
}])

new Component({
	root: 'body',
	template: template
})
