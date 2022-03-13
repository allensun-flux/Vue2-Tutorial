const app = new Vue({
  el: '#app',
  data: {
    name: 'Allen',
    age: 25,
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Ninja Tag</a>',
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    ninjas: [
      {
        name: 'ninja1',
        age: 12,
      },
      {
        name: 'ninja2',
        age: 21,
      },
    ]
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
    // Both methods will be triggered if either values change
    // addToA: function () {
    //   console.log('click A');
    //   return this.a + this.age;
    // },
    // addToB: function () {
    //   console.log('click B');
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function () {
      console.log('click A');
      return this.a + this.age;
    },
    addToB: function () {
      console.log('click B');
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      }
    }
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