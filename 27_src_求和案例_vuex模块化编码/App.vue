<template>
  <div>
    <Count/>
    <Person/>
    <!-- <Count> -->
      <!-- 默认插槽 -->
      <!-- <h1>好好好！！！</h1> -->
      <!-- 具名插槽 -->
      <!-- <template slot="hehe">
        <img src="./assets/德玛西亚.jpg" alt="">
        <hr>
      </template>
      <template slot="xixi">
        <video controls src="./assets/test.mp4"></video>
      </template> -->

      <!-- 作用域插槽 -->
      <!-- <template slot="haha" scope="shuju">
        {{ shuju.game }}
        <br>
        {{ shuju.msg }}
        <hr>
      </template>
      <template slot="hehe" scope="{msg}">
        {{ msg }}
        <hr>
      </template> -->
    <!-- </Count> -->
  </div>
</template>

<script>
  import Count  from './components/Count'
  import Person  from './components/Person'
  export default {
    name: 'App',
    components: {
        Count,
        Person
    },
    // mounted() {
    //   console.log('App', this)      
    // }
 }
</script>

<style>
video {
  width: 300px;
  height: 300px;
}
</style>