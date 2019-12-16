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
            { title:'default-playlist', songs: ['thunder', 'believer'] },
            { title:'another-default-playlist', songs: ['bohemian rhapsody', 'we will rock you'] }
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
        }
    },
    actions: {
        getSongs() {
            this.commit('getSongsFromServer');
        },
        putEditedSong( state, payload ) {
            state.commit('putEditedSong', payload);
        }
    },
    getters: {

    },  
    modules: {

    }
});

export default store;