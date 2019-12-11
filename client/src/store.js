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
        },
        putNewSong( payload ) {
            this.state.songs.push(payload.song);
        }
    },
    actions: {
        getSongs() {
            this.commit('getSongsFromServer');
        },
        putSong(newSong) {
            /**
             * gotta pass data to a mutation in the form of an object
             * (even if the data is another object, it needs to be passed as a value with a valid key)!!
             *  */
            this.commit('putNewSong', { song: newSong });
        }
    },
    getters: {

    },  
    modules: {

    }
});

export default store;