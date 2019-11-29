import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        songs: [
			{
				'song': 'bohemian rhapsody',
				'yUrl': 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
			},
			{
				'song': 'believer',
				'yUrl': 'https://www.youtube.com/embed/7wtfhZwyrcc'
			},
			{
				'song': 'thunder',
				'yUrl': 'https://www.youtube.com/embed/fKopy74weus'
			},
			{
				'song': 'we will rock you',
				'yUrl': 'https://www.youtube.com/embed/-tJYN-eG1zk'
			},
		],
    },
    actions: {
        
    },
    mutations: {
        addNewSong( state, payload) {
			state.songs.push(payload);
		}
    },
    getters: {

    },  
    modules: {

    }
});

export default store;