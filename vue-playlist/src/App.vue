<template>
  <div>
    <h1>{{ title }}</h1>
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
h1{
  color: purple;
}
</style>