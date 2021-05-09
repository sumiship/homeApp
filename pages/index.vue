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
      <br>
      <button @click="test()">test</button>
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
    test(){
      console.log(Object.keys(this.posts).length)
    }
  }
};
</script>
