<template>
  <div class="container">
    <Category title="食物">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="../public/show.mp4"></video>
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
</style>