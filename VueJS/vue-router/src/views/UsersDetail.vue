<template>
<v-layout>
  <v-container>
    <h1>detail</h1>
    <h1>유저 번호 : {{ userId }}</h1>
    <v-btn @click="edit">수정</v-btn>
  </v-container>
</v-layout>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  methods: {
    edit() {
      this.$router.push({
        name: 'users-edit'
      })
    }
  },
}
</script>