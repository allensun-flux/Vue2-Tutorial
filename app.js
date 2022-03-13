const app = new Vue({
  el: '#app',
  data: {
    name: 'Allen',
    age: '25',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Ninja Tag</a>'
  },
  methods: {
    greeting: function () {
      return `Good Morning ${
        this.name
      }`
    },
    add: function () {
      this.age += 10;
    },
    subtract: function () {
      this.age -= 10;
    },
    logName: function () {
      console.log('You entered your name')
    },
    logAge: function () {
      console.log('You entered your age')
    },
  }
})

const canvas = new Vue({
  el: '#canvas',
  data: {
    x: 0,
    y: 0,
  },
  methods: {
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
})