<template>
  <div>
    <div>{{ detail }}</div>
    <ul>
      <li v-for="(item, index) in news" :key="index">
        <router-link :to="{ path: '/news/' + item.id }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ route, store }) {
    let { id } = route.params;
    return store.dispatch("getDetail", { id });
  },
  computed: {
    detail() {
      return this.$store.state.detail;
    },
    news() {
      return this.$store.state.news;
    },
  },
  beforeRouteUpdate() {
    console.log("update");
  },
};
</script>

<style></style>
