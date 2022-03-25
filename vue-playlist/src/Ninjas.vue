<template>
  <ul>
    <li v-for="ninja in ninjas" :key="ninja">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ninjas',
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style>

</style>