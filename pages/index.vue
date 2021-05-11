<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="introduction">
        <h1>大住航希</h1>
        <h3>Koki Osumi</h3>
        <div class="links">
          <a href="https://www.instagram.com/osumi_koki/" target="blank"
            >Instagram</a
          >
          <a href="https://github.com/sumiship" target="blank">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  margin-top: 100px;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduction {
  width: 500px;
  height: 500px;
  background-color: rgba(188, 143, 143, 0.39);
  padding-top: 40px;
}
.introduction h1 {
  text-align: center;
  font-size: 80px;
}
.introduction h3 {
  text-align: center;
  font-size: 40px;
}
.links {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
.links a {
  display: block;
  text-decoration: none;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: rgba(244, 165, 96, 0.671);
  border-radius: 50%;
}
@media screen and (max-width: 650px) {
  .introduction {
    width: 250px;
    height: 250px;
  }
  .introduction h1{
    font-size: 30px;
  }
  .introduction h3{
    font-size: 15px;
  }
  .links{
    margin-top: 30px;
  }
  .links a{
    width:80px;
    height:80px;
    line-height:80px;
  }
}
</style>
