<template>
  <div id="ninja">
    <h1>{{ ninjasTitle }}</h1>
    <ul>
      <li 
        v-for="(ninja, index) in ninjas" 
        :key="index" 
        v-on:click="ninja.show = !ninja.show"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.specialty }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ninjas',
  props: {
    ninjas: {type: Array, required: true},
    ninjasTitle: {type: String, required: true},
  },
  data() {
    return {
    }
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  // lifecycle hooks
  beforeCreate() {
    alert('beforeCreate');
  },
  created() {
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  },

}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>