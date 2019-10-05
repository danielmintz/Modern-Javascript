// DOM queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'luigi');

// get chats and render to the dom
chatroom.getChats((data) => {
    console.log(data);
    chatUI.render(data);
});