<template>
  <div class="tab">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab {
    display: flex;
    background-color: rgb(224, 215, 215);

    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

    box-shadow: 0 -3px 1px rgba(230, 223, 223, 0.993);
  }
</style>