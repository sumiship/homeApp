<template>
  <div class="container">
    <div>
      <Logo />
      <NuxtLink to="pe">Go to [pe]</NuxtLink>
      <NuxtLink to="po/3">Go to [po]</NuxtLink>
      <h1 class="title">
        homeAppofffo
      </h1>
    </div>
    <div>
      {{ posts }}
      <br />
      <button @click="test()">test</button>
    </div>
    <div class="main">
      <div class="item" v-for="post in posts" :key="post.id">
        <h3 class="title">{{ post.name }}</h3>
        <img width="260px" :src="'/img/' + post.image_id" alt="" />
        <a :href="post.url" target="_blank">アプリへ</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.$store.state.posts
    };
  },
  methods: {
    test() {
      console.log(Object.keys(this.posts).length);
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
.title{
  text-align:center;
}
</style>
