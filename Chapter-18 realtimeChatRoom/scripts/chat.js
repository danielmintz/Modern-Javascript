// +adding new chat documents+
// setting up a real-time listener to get new chats
// updating the username
// updating the room 

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }

// adding new chat documents
async addChat(message){
    //format a chat object
    const now = new Date();
    const chat = {
        message: message,
        username: this.username,
        room: this.room,
        created_at: firebase.firestore.Timestamp.fromDate(now)

    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;

}
//real time listener to get new chats
getChats(callback) {
this.chats
    .where('room', '==', this.room)
    .orderBy('created_at')
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
           if(change.type === 'added') {
               //update the ui
             callback(change.doc.data())
           }

        })
});
}
}

const chatroom = new Chatroom('general', 'luigi');
chatroom.getChats((data) => {
    console.log(data)
});

// chatroom.addChat('hello eveyone')
//     .then(()=> {
//         console.log('chat added')
//     }).catch((err) => {
//         console.log(err)
//     });

