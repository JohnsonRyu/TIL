new Vue({
  el: "#app",
  data: {
    myChoice: null,
    count: 3
  },
  methods: {
    startGame: function() {
      if(this.myChoice) {
        let countDown = setInterval(() => {
          this.count --;
          if(this.count === 0) {
            clearInterval(countDown);
          }
        }, 1000);
      } else {
        alert("가위 바위 보 중 하나를 선택해주세요.")
      }
    }
  },
});