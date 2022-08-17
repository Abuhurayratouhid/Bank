// console.log('I am from javaScript');
document.getElementById('btn-submit').addEventListener('click',function(){
  
    // get email 
    const getEmail = document.getElementById('user-email');
    const email = getEmail.value;
    //  get password 

    const getPassword = document.getElementById('user-password');
    const password = getPassword.value;
    // console.log(email, password)

    if(email === 'touhid@gmail.com' && password === 'touhid'){
        // console.log('valid password')
        window.location.href = 'bank.html'

    }
    else{
        alert('Wrong password')
    }

})