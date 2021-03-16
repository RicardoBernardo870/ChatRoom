const signupForm = document.querySelector('#signup-form');
const logout = document.querySelector('#logout');
const login = document.querySelector('#login-form');
const chat = document.querySelector('.chat-list');




auth.onAuthStateChanged(user => {
    if (user) {
     setupUI(user);
     chatroom.getChats(data => chatUI.render(data));
     chat.innerHTML = ''
       
        
    } else {
     
      setupUI();
      chat.innerHTML = 'LOGIN TO SEE CHAT';
      
    
        
    }
})


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const pass = signupForm['signup-password'].value;



    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});


logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});


login.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const email = login['login-email'].value;
    const password = login['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        login.reset();
    })
    
})



