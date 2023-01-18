const wrapper = document.querySelector('.wrapper');
const singUpLink = document.querySelector('.singUp-link');
const singInLink = document.querySelector('.singIn-link');

singUpLink.addEventListener('click', () =>{
    wrapper.classList.add('animate-SingIn');
    wrapper.classList.remove('animate-SingUp');
});

singInLink.addEventListener('click', () =>{
    wrapper.classList.add('animate-SingUp');
    wrapper.classList.remove('animate-SingIn');
});