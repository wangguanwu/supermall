<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'TabBar',
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 3px;
    box-shadow: 0 -2px 1px rgba(143, 136, 136, 0.5);
  }
</style>
