<template>
  <div>
    <div class="list-group">
      <template v-for="chat in chatList">
        <ChatListItem
          :chat="chat"
          v-bind:key="chat.lastMessage"
        />
      </template>
    </div>
  </div>
</template>
<script>
import ChatListItem from './ChatListItem';
export default {
  props: ['chatList'],
  components: {
    ChatListItem
  }
};
</script>