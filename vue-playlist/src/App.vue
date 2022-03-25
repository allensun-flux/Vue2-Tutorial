<template>
  <div>
    <div>{{ title }}</div>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas';
export default {
  component: {
    ninjas: Ninjas
  },
  data () {
    return {
      title: 'Ninja App',
    }
  },
  methods: {
    greeting() {
      return 'heeeeey, cowboy!';    
    }
  }
}
</script>

<style>

</style>