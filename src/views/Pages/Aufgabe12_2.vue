<template>
  <div>
    <svg width="150" height="150">
      <polygon points="50,5 95,85 5,85" stroke-miterlimit="10" stroke-linejoin="round" stroke-width="4"/>
      <polygon points="50,105 95,30 5,30" stroke-miterlimit="10" stroke-linejoin="round" stroke-width="4" pointer-events="none" />
    </svg>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
  div {
    display: flex;
    justify-content: center;
  }
  polygon {
    fill: #ffffff;
    stroke: #0000ff;
  }
</style>
