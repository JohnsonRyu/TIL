<template>
  <div>
    {{ userId }}
    <h1>그룹 : {{ $route.query.group }} </h1>
    <h1>카테고리 : {{ $route.query.category }} </h1>
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
}
</script>