import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const serverPort = 5000/* mongo server port */; /* 3000 for file server */

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
    mutations: {
        async getSongsFromServer() {
            var result = (await axios.get(`http://localhost:${serverPort}/songs`));
            if( result.status === 200 ) {
                this.state.songs = result.data;
                /** .data.list if file server is used */
            }
        }
    },
    actions: {
        getSongs() {
            this.commit('getSongsFromServer');
        }
    },
    getters: {

    },  
    modules: {

    }
});

export default store;