import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateNew from './components/CreateNew';
import MyMusic from './components/MyMusic';
import Playlist from './components/Playlist';

Vue.use(VueRouter);

const routes = [
	{ path: '/myMusic', component: MyMusic },
	{ path: '/createNew', component: CreateNew },
	{ path: '/playlist', component: Playlist },
];

export default new VueRouter({
	routes : routes
});