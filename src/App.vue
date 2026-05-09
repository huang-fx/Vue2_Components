<template>
  <div class="container">
    <Category title="食物">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a class="hcd" slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="../public/show.mp4"></video>
      <template slot="footer">
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎大家观看</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from "./components/Category"

  export default {
      name: 'App',
      components: {
        Category
      },
      data() {
        return {
          foods: ['烧烤', '汉堡', '火锅', '沙拉'],
          games: ['金铲铲之战', '火影忍者', 'GTA', '和平精英'],
          films: ['《白日梦想家》', '《飞驰人生》', '《美丽心灵》', '《教父》']
        }
      }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
  .foot, .hcd, h4 {
    display: flex;
    justify-content: center;
    /* margin: 2px; */
    gap:6px;
  }
</style>