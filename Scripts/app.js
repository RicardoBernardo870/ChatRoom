// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');


const setupUI = (user) => {
    if (user) {
        
        const html = `<div>Logged in as ${user.email}`;
        accountDetails.innerHTML = html;
        loggedInLinks.forEach(item => item.style.display = 'Block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';
        
    
    }
}



document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});


newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
       .then(() => newChatForm.reset())
       .catch(err => console.log(err));
})


newNameForm.addEventListener('submit', e => {
    e.preventDefault();
   
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    
    newNameForm.reset();
    
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);

});


rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

const username = localStorage.username ? localStorage.username : 'anon';



const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);


