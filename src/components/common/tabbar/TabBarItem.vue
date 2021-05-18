<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red',
      }
    },
    data() {
      return {};
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {};
      }
    },
    methods: {
      itemClick() {
        console.log("itemClick")
        this.$router.push(this.path).catch(err => console.log(err));
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 20x;
    margin-top: 1px;
    vertical-align: medium;
    margin-bottom: 2px;
  }
</style>
