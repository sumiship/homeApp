<template>
  <div class="container">
    <div class="main">
      <div
        class="item"
        v-for="post in posts"
        :key="post.id"
        @click="$router.push('show/' + post.id)"
      >
        <h3 class="title">{{ post.name }}</h3>
        <img
          width="260px"
          :src="require(`~/assets/img/` + post.image_id)"
          alt=""
        />
        <a :href="post.url" target="_blank">アプリへ</a>
      </div>
    </div>
    <!-- <script src="https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js"></script> -->
    <!-- <script>
      bubbly();
    </script> -->
  </div>
</template>

<script>
// import bubbly from "https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg";
export default {
  data() {
    return {
      posts: this.$store.state.posts
    };
  },
  methods: {
    page(id) {
      this.$router.push;
    }
  }
};
</script>
<style scoped>
.main {
  display: flex;
}
.item {
  width: 300px;
  height: 400px;
  background-color: bisque;
  border: coral 1px solid;
  border-radius: 10px;
  margin: 20px;
}
img {
  display: block;
  margin: 0 auto;
}
.title {
  text-align: center;
}
</style>
