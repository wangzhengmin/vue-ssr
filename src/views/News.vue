<template>
  <ul>
    <li v-for="(item, index) in news" :key="index">
      <router-link :to="{ path: '/news/' + item.id }">
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  asyncData({ store }) {
    return store.dispatch("getNews");
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
};
</script>

<style></style>
