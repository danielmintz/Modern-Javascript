// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');
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

//update username
newNameForm.addEventListener(('submit'), e =>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
  //update name via chatroom class
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    // show and hide the update message (for a few seconds)
    updateMessage.innerText = `Your name has been updated to ${newName}`;
    setTimeout(() =>{
        updateMessage.innerText = ``;
    }, 3000)
});
// Update the chat room

rooms.addEventListener(('click'), e => {
if(e.target.tagName === 'BUTTON'){
   chatUI.clear();
   chatroom.updateRoom(e.target.getAttribute('id'));
   chatroom.getChats((data) => {
    chatUI.render(data)
   });
}
});
// check local storage for a name (using a tertiary operator ... like and if else statement)

const username = localStorage.username ? localStorage.username : 'anonymous';


//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats and render to the dom
chatroom.getChats((data) => {
    // console.log(data);
    chatUI.render(data);
});