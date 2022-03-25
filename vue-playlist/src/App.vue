<template>
  <div>
    <div>
      <form-helper>
        <template #form-header>
          <h3>This is the title of the form</h3>
          <p>Information about the form</p>
        </template>
        <template #form-fields>
          <input type="text" placeholder="name" required>
          <input type="password" placeholder="password" required>
        </template>
        <div slot="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
        </div>
        <!-- <h2 slot="title">{{ title }}</h2> -->
        <!-- <p slot="text">I am the paragraph text for the slot</p> -->
      </form-helper>
      <!-- Dynamic Component -->
      <keep-alive>
        <component v-bind:is="component" />
      </keep-alive>
      <button v-on:click="component = 'app-header'">Show Header</button>
      <button v-on:click="component = 'app-footer'">Show Footer</button>
      <!-- <app-header :title="ninjasTitle" v-on:changeTitle="updateTitle($event)"/> -->
      <!-- <app-ninjas :ninjas="ninjas" :ninjasTitle="ninjasTitle"/> -->
      <!-- <app-ninjas :ninjas="ninjas" :ninjasTitle="ninjasTitle"/> -->
      <!-- <app-footer :title="ninjasTitle"/> -->
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
import formHelper from './components/formHelper'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': formHelper,
  },
  data () {
    return {
      component: 'app-header',
      title: 'Ninja App',
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Event', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
      ],
      ninjasTitle: 'Ninjas',
    }
  },
  methods: {
    // greeting() {
    //   return 'heeeeey, cowboy!';    
    // }
    handleSubmit() {},
    updateTitle(updatedTitle) {
      this.ninjasTitle = updatedTitle;
    }
  }
}
</script>

<style>
h1{
  color: purple;
}
</style>