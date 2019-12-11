<template>
  <div id="client-app">
    <Header />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
    this.$store.dispatch({
      type: 'getSongs',
      payload: {}
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
