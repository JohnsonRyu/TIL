<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ title }}</p>
    <button @click="count ++">버튼</button>
    <HomeComponent/>
    <AppStatus/>
  </div>
</template>

<script>

  import HomeComponent from "./Home";

  export default {
    components: {
      HomeComponent
    },
    data() {
      return {
        title: "안녕",
        count: 0
      }
    }
  }
</script>
