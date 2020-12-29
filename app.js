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
    let change = fname;
    // Add msg style & text content
    fmessage.classList.add('message')
    fmessage.textContent = `First Name cannot be empty!`
    content(change);
    e.preventDefault()

  } else {
    // Change everything to default
    let normal = fname;
    let errorMsg = fmessage;
    reset(normal, errorMsg)
  }

  // Last Name
  if(lname.value === '' || lname.value == null){
    let change = lname;
    // Add msg style & text content
    lmessage.classList.add('message')
    lmessage.textContent = `First Name cannot be empty!`
    content(change);
    e.preventDefault()

  } else {
    // Change everything to default
    let normal = lname;
    let errorMsg = lmessage;
    reset(normal, errorMsg)
  }

  // Email
  if(email.value === '' || email.value == null){
    let change = email;
    // Add msg style & text content
    emessage.classList.add('message')
    emessage.textContent = `First Name cannot be empty!`
    content(change);
    e.preventDefault()

  } else {
    // Change everything to default
    let normal = email;
    let errorMsg = emessage;
    reset(normal, errorMsg)
  }

  // Password
  if(password.value === '' || password.value == null){
    let change = password;
    // Add msg style & text content
    pmessage.classList.add('message')
    pmessage.textContent = `First Name cannot be empty!`
    content(change);
    e.preventDefault()

  } else {
    // Change everything to default
    let normal = password;
    let errorMsg = pmessage;
    reset(normal, errorMsg)
  }
})
// Error Message
function content(change){
  change.previousElementSibling.style.display = 'block';
  change.placeholder = ''
  change.style.borderColor = 'red'
}
// Disable Error Message
function reset(normal, errorMsg){
  normal.style.borderColor = 'gray'
  normal.previousElementSibling.style.display = 'none';
  errorMsg.remove();
}