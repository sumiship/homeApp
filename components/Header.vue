<template>
  <div class="header">
    <img @click="$router.push('/')" height="140px" :src="require(`~/assets/img/logo_transparent.png`)" alt="" />
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  display: flex;
  height: 100px;
  width: 100%;
  top: 0;
  background-color: cornsilk;
}
.header img{
  cursor: pointer;
}
</style>
