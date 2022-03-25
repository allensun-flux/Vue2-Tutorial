<template>
  <div>
    <div>
      <app-header />
      <app-ninjas />
      <app-footer />
    </div>
    <!-- <div>
      <h1>#19 Nesting Components</h1>
      <h1>{{ title }}</h1>
      <p>{{ greeting() }}</p>
      <ninjas></ninjas>
    </div> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
  },
  data () {
    return {
      title: 'Ninja App',
    }
  },
  methods: {
    // greeting() {
    //   return 'heeeeey, cowboy!';    
    // }
  }
}
</script>

<style>
h1{
  color: purple;
}
</style>