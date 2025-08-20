const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const errorEmail = document.querySelector('.container__content__form__email--error');

form.addEventListener('submit', (event) => {
  const regExp =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if(regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
    inputEmail.style.backgroundImage = 'url("")';
    errorEmail.innerHTML = '';
  } else {
    event.preventDefault();
    inputEmail.style.border = '1px solid red';
    inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
    errorEmail.innerHTML = 'Please provide a valid email address';
  }
});