//Template namespace li-items
// ------------------------------------------------------
/* <li class="namespace-item">
  <i class="fas fa-circle namespace-icon"></i>
  <span class="namespace-name">NS1</span>
</li> */
//--------------------------------------------------------

//Template rooms li-items
//--------------------------------------------------------
/* <li class="room-item">
  <i class="fas fa-hashtag room-icon"></i>
  <span class="room-name">Room1</span>
</li>
*/
//--------------------------------------------------------

//Template chat li-items
//--------------------------------------------------------
/* <li class="chat-item">
  <span class="user">User1:</span>
  <span class="text">Hello, how are you?</span>
</li> */

//--------------------------------------------------------

//Template visitors li-items
//--------------------------------------------------------
/* <li class="visitor-item">
  <i class="fas fa-user visitor-icon"></i>
  <span class="visitor-name">V1</span>
</li> */

//--------------------------------------------------------

function writeToChat(message,sender){
    return
}

const socket = io('http://127.0.0.1:9999')

socket.on('connect',()=>{
    console.log(socket.id,'Connected Successfully..')
    socket.emit('C_new_client_conneted')
})

socket.on('S_welcome_client',(data)=>{
    //Write to chat
    console.log(data)
})