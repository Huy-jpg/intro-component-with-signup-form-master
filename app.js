const submitBtn = document.getElementById('submit'),
      msg = document.querySelectorAll('.message'),
      exclamation = document.querySelectorAll('.exclamation'),
      email = document.querySelector('.email'),
      input = document.querySelectorAll('.int');

submitBtn.addEventListener('click', () =>{
  if(input.value === ''){
    exclamation.forEach(exclam => {
      exclam.style.display = 'block';
    })
  }
})