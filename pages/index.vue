<template>
  <div class="container">
    <div>
      <Logo />
      <NuxtLink to="pe">Go to [pe]</NuxtLink>
      <NuxtLink to="po/3">Go to [po]</NuxtLink>
      <h1 class="title">
        homeAppooooooooooooooooooooo
      </h1>
    </div>
    <div>
      {{ posts }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.$store.state.posts
    };
  }
};
</script>
