<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <ul>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
      <li>列表1</li>
    </ul>
  </div>
</template>
<script>
  import NavBar from 'common/navigationbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/Recommend';
  import FeatureView from './childComps/Feature';
  import {
    getHomeMultidata
  } from 'network/home';
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: rgb(255, 255, 255);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
</style>
