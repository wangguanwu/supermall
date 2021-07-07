<template>
  <div class="goods">
    <good-list-item :goods-item="item" v-for="(item,index) in goods" :key="index" />
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem';
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    components: {
      GoodListItem
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
