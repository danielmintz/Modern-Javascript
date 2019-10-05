// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat')

//add a new chat
newChatForm.addEventListener(('submit'), e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => {
        newChatForm.reset()
    })
    .catch((err) =>{
        console.log(err)
    });

})
// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'luigi');

// get chats and render to the dom
chatroom.getChats((data) => {
    console.log(data);
    chatUI.render(data);
});