<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;

  }
</style>
