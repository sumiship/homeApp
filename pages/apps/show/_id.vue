<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="item">
        <h3 class="title">
          <span>{{ post.name }}</span>
        </h3>
        <div class="post_img">
          <img
            width="260px"
            :src="require(`~/assets/img/` + post.image_id)"
            alt=""
          />
        </div>
        <div class="link">
          <a :href="post.url" target="_blank">アプリへ</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: this.$store.state.posts["post" + this.$route.params.id]
    };
  }
};
</script>
<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  width: 300px;
  height: 420px;
  background-color: bisque;
  border: coral 1px solid;
  border-radius: 10px;
  margin: 20px;
}
img {
  vertical-align: middle;
  height:340px;
  object-fit: contain;
}
.title {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 25px;
}
.title span {
  background-color: lightsalmon;
  padding: 0 4px;
  border-radius: 10px;
}
.post_img {
  width: 270px;
  height: 340px;
  /* background-color: rgb(238, 226, 213); */
  margin: 0 auto;
  text-align: center;
  line-height: 340px;
}
.link{
  text-align: center;
  line-height: 40px;
}
.link a {
  text-decoration: none;
  background-color: tomato;
  font-size: 17px;
  padding:3px;
  border-radius: 7px;
}
</style>
