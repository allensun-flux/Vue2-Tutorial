<template>
  <div>
    <div>
      <app-header />
      <app-ninjas :ninjas="ninjas"/>
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
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Event', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
      ]
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