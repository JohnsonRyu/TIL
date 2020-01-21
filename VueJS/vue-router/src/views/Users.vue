<template>
  <div>
    {{ userId }}
    {{ this.$route.params.userId }}
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
}
</script>