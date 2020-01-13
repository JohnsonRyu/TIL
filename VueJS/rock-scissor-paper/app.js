new Vue({
  el: "#app",
  data: {
    myChoice: null,
    comChoice: null,
    count: 3,
    winner: null,
    lifeOfMe: 3,
    lifeOfCom: 3,
    isSelectable: true,
    logs: []
  },
  watch: {
    count: function(newVal) {
      if(newVal === 0) {
        const number = Math.random();

        if(number < 0.33) {
          this.comChoice = "scissor";
        } else if(number < 0.66) {
          this.comChoice = "rock";
        } else {
          this.comChoice = "paper";
        }
        // 승패 결정
        if(this.myChoice === this.comChoice) this.winner = "no one"
        else if(this.myChoice === "rock" && this.comChoice === "scissor") this.winner = "me"
        else if(this.myChoice === "scissor" && this.comChoice === "paper") this.winner = "me"
        else if(this.myChoice === "paper" && this.comChoice === "rock") this.winner = "me"
        else if(this.myChoice === "scissor" && this.comChoice === "rock") this.winner = "com"
        else if(this.myChoice === "paper" && this.comChoice === "scissor") this.winner = "com"
        else if(this.myChoice === "rock" && this.comChoice === "paper") this.winner = "com"
        else this.winner = "error"

        if(this.winner === "me") {
          this.lifeOfCom --;
        } else if(this.winner === "com") {
          this.lifeOfMe--;
        }
        this.count = 3;
        this.isSelectable = true;

        const log = `You: ${this.myChoice}, Computer: ${this.comChoice}`
        this.logs.unshift(log);
      }
    }
  },
  methods: {
    startGame: function() {
      if(this.myChoice) {
        this.isSelectable = false;
        const countDown = setInterval(() => {
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