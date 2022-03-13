const app = new Vue({
  el: '#bag',
  data: {
    health: 100,
    end: false,
    imgPunchbag: './bag.png',
    imgPunchbagBurst: './bag-burst.png'
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health == 0) {
        this.end = true;
      }
    },
    restart() {
      this.health = 100;
      this.end = false;
    },
    getImgUrl() {
      return this.end ? this.imgPunchbagBurst : this.imgPunchbag
    }
  }
})

