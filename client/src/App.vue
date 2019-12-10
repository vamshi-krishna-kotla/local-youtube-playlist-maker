<template>
  <div id="client-app">
    <Header />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Header,
  },
  mounted() {
    var _this = this;
    var serverPort = 5000/*mongo server port */; /* 3000 for file server */
    axios.get(`http://localhost:${serverPort}/songs`).then( response => {
      _this.$store.state.songs = response.data; /**response.data.list if file server is used */
    });
  }
}
</script>

<style lang="scss" scoped>
#client-app {
  width: 100%;

  .router-view{
    margin: auto;
    width: 90%;
  }
}
</style>
