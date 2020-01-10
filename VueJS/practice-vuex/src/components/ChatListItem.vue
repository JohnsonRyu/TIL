<template>
  <button type="button" class="list-group-item text-left d-flex justify-content-between align-items-center" @click="itemClick">
    {{ chat.lastMessage }}
    <span class="badge badge-primary badge-pill">{{ chat.new }}</span>
  </button>
</template>
<script>
  import { bus } from '../event-bus';

  export default {
    props: ['chat'],
    methods: {
      itemClick() {
        bus.$emit('CHAT_CLICK', {...this.chat});
      }
    }
  }
</script>