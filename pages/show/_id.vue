<template>
  <div>
    <h1>po {{ id }}</h1>
    <NuxtLink to="/">home</NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
