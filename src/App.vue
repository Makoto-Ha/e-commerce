<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  mounted() {
    // 發送請求API到vuex狀態裡，因為APP不會被銷毀，只會掛載一次，適合發送API
    this.$store.dispatch('categoryList');
  }
};
</script>