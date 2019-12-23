import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

/**
 * mongo server port = 5000
 * file server = 3000
 */
const serverPort = 5000;

var store = new Vuex.Store({
    state: {
        songs: [],
        genres: [
            'Classic', 'Rock', 'Pop',
            'Heavy metal', 'Electronic', 'Arena',
            'Reggae', 'Jazz',
            'Folk', 'Blues', 'Rap'
        ],
        playlists: [
        ]
    },
    mutations: {
        async getSongsFromServer() {
            var result = (await axios.get(`http://localhost:${serverPort}/songs`));
            if( result.status === 200 ) {
                this.state.songs = result.data;
                /** 
                 * result.data.list - file server 
                 * result.data - mongo server
                 */
            }
        },
        putNewSong( state, payload ) {
            state.songs.push(payload.song);
        },
        putEditedSong( state, payload ) {
            var index = state.songs.indexOf(state.songs.find( song => song.song === payload.key ));
            state.songs[index].song = payload.song.song;
            state.songs[index].artist = payload.song.artist;
            state.songs[index].link = payload.song.link;
            state.songs[index].genre = payload.song.genre;
        },
        deleteCurrentSong( state, payload ) {
            state.songs = state.songs.filter( song => song.song !== payload.song );
            /**
             * just another way to delete
             * 
             * var index = state.songs.indexOf(state.songs.find( song => song.song === payload.song ));
             * state.songs.splice(index, 1);
             */
        } 
    },
    actions: {
        getSongs() {
            this.commit('getSongsFromServer');
        },
        putEditedSong( state, payload ) {
            state.commit('putEditedSong', payload);
        },
        deleteSong( state, payload ) {
            state.commit('deleteCurrentSong', payload);
        }
    },
    getters: {

    },  
    modules: {

    }
});

export default store;