const form = document.getElementById('form'),
      fmessage = document.querySelector('.fmessage'),
      lmessage = document.querySelector('.lmessage'),
      emessage = document.querySelector('.emessage'),
      pmessage = document.querySelector('.pmessage'),
      fname = document.getElementById('firstname'),
      lname = document.getElementById('lastname'),
      email = document.getElementById('email'),
      password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
  // First Name
  if(fname.value === '' || fname.value == null){

    // Add msg style & text content
    fmessage.classList.add('message')
    fname.placeholder = ''
    fmessage.textContent = `First Name cannot be empty!`

    // Change style of exclamation point and input border
    fname.previousElementSibling.style.display = 'block'
    fname.style.borderColor = 'red'
    e.preventDefault()

  } else {
    // Change everything to default
    fmessage.remove()
    fname.previousElementSibling.style.display = 'none'
    fname.style.borderColor = 'gray'
  }

  // Last Name
  if(lname.value === '' || lname.value == null){

    // Add msg style & text content
    lmessage.classList.add('message')
    lname.placeholder = ''
    lmessage.textContent = `First Name cannot be empty!`

    // Change style of exclamation point and input border
    lname.previousElementSibling.style.display = 'block'
    lname.style.borderColor = 'red'
    e.preventDefault()

  } else {
    // Change everything to default
    lmessage.remove()
    lname.previousElementSibling.style.display = 'none'
    lname.style.borderColor = 'gray'
  }

  // Email
  if(email.value === '' || email.value == null){

    // Add msg style & text content
    emessage.classList.add('message')
    email.placeholder = ''
    emessage.textContent = `First Name cannot be empty!`

    // Change style of exclamation point and input border
    email.previousElementSibling.style.display = 'block'
    email.style.borderColor = 'red'
    e.preventDefault()

  } else {
    // Change everything to default
    emessage.remove()
    email.previousElementSibling.style.display = 'none'
    email.style.borderColor = 'gray'
  }

  // Password
  if(password.value === '' || password.value == null){

    // Add msg style & text content
    pmessage.classList.add('message')
    password.placeholder = ''
    pmessage.textContent = `First Name cannot be empty!`

    // Change style of exclamation point and input border
    password.previousElementSibling.style.display = 'block'
    password.style.borderColor = 'red'
    e.preventDefault()

  } else {
    // Change everything to default
    pmessage.remove()
    password.previousElementSibling.style.display = 'none'
    password.style.borderColor = 'gray'
  }
})