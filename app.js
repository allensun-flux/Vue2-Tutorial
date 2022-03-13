const app = new Vue({
  el: '#app',
  data: {
    name: 'Allen',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Ninja Tag</a>'

  },
  methods: {
    greeting: function () {
      return `Good Morning ${
        this.name
      }`
    }
  }
})
