import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        songs: [],
        genres: [
            'Classic', 'Rock', 'Pop',
            'Heavy metal', 'Electronic', 'Arena',
            'Reggae', 'Jazz',
            'Folk', 'Blues', 'Rap'
        ]
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