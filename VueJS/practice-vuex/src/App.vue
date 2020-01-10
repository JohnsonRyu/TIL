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
import Header from './components/Header';
import ChatList from './components/ChatList';
import { bus } from './event-bus';

export default {
  name: 'app',
  data() {
    return {
      chatList: [
        {
          id: 1,
          lastMessage: '채팅 메시지1',
          new: 1
        },
        {
          id: 2,
          lastMessage: '채팅 메시지2',
          new: 2
        },
        {
          id: 3,
          lastMessage: '채팅 메시지3',
          new: 1
        },
        {
          id: 4,
          lastMessage: '채팅 메시지4',
          new: 5
        }
      ]
    };
  },
  computed: {
    newMessageCount() {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b);
    }
  },
  methods: {
    readChatItem(chatItem) {
      this.chatList.filter(item => item.id === chatItem.id)[0].new = 0;
    }
  },
  created() {
    bus.$on('CHAT_CLICK', chat => {
      this.readChatItem(chat);
    });
  },
  components: {
    Header,
    ChatList
  }
}
</script>