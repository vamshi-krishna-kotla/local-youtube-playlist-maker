import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        songs: [],
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