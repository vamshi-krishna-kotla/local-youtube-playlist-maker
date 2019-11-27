import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateNew from './components/CreateNew'
import MyMusic from './components/MyMusic'

Vue.use(VueRouter);

const routes = [
	{ path: '/myMusic', component: MyMusic },
	{ path: '/createNew', component: CreateNew },
];

export default new VueRouter({
	routes : routes
});