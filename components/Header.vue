<template>
  <div class="header">
    <div class="logo">
      <img
        @click="$router.push('/')"
        height="100px"
        :src="require(`~/assets/img/logo_transparent.png`)"
        alt=""
      />
    </div>
    <div class="nav">
      <li @click="$router.push('/apps/home')">app</li>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding-right: 20px;
  top: 0;
  background-color: cornsilk;
}
.logo {
  cursor: pointer;
}
.header img{
  position: absolute;
  width: 150px;
  height: 150px;
  top: -15px;
}
.nav {
}
.nav li {
  font-size: 60px;
  list-style-type: none;
  cursor: pointer;
}
</style>
