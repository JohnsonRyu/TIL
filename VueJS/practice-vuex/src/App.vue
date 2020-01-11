<template>
  <div id="app">
    <Header
      :new-message-count="newMessageCount"
    />
    <div class="container mx-auto mt-5">
      <ChatList
        :chat-list="chatList"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Header from './components/Header';
import ChatList from './components/ChatList';


export default {
  name: 'app',
  data() {
    return {
      
    };
  },
  computed: {
    newMessageCount() {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b);
    },
    ...mapState({
      chatList: 'chatList'
    })
  },
  methods: {
  },
  components: {
    Header,
    ChatList
  },
}
</script>