<template>
<v-layout>
  <v-container>
    <v-row>
      <h1>유저를 검색해 주세요.</h1>
      <v-col cols="12" sm="6" md="3">
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
      </v-col>
    </v-row>
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
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
}
</script>