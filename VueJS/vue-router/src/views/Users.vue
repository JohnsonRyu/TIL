<template>
<v-layout>
  <v-container>
      <h1>유저를 검색해 주세요.</h1>
        <v-text-field
          v-model="userId"
          label="유저 번호를 입력하세요."
        ></v-text-field>
        <v-btn @click="$router.push({
          name: 'users-detail',
          params: {
            id: userId
          }
          })"
        >
          검색
        </v-btn>
      <router-view></router-view>
  </v-container>
</v-layout>
</template>
<script>
export default {
  data() {
    return {
      userId: null
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("to", to);
    console.log("from", from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("to", to);
    console.log("from", from);
    next();
  }
}
</script>