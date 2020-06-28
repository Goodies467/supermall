<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data () {
      return {
        banners:[],
        recommends:[]
      }
    },
    created () {//实现一个生命周期函数。发送网络请求
    // 1、请求多个数据
    getHomeMultidata().then(res=>{//通过res拿到请求的结果
      console.log(res);
      //this.result=res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
