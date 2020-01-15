<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ sayHello }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      userName: {
        type: String,
        default: "LEGO"
      }
    },
    computed: {
      sayHello() {
        return this.userName + " 안녕하세요."
      }
    }
  }
</script>