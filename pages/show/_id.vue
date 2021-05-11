<template>
  <div>
    <Header></Header>
    <div class="main">
      <h1>po {{ id }}</h1>
      <NuxtLink to="/">home</NuxtLink>
    </div>
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
<style scoped>
.main{
  margin-top: 100px;
}
</style>
