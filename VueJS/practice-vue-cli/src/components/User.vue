<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn color="info" @click="changeName">버튼</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail :userName="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: "기혁"
    }
  },
  methods: {
    changeName() {
      this.name = "류기혁";
    }
  },
}
</script>