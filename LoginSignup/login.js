let userArray = [];


(() => {
  userArray = JSON.parse(localStorage.getItem('usersData'));

  const userLogin = JSON.parse(localStorage.getItem('loginUser'))


  if(userLogin)
{
  location.href = 'index.html'
}






  console.log(userArray)






})()

let signInBtn = document.getElementById('signInBtn');

signInBtn.addEventListener('click', (a) => {

  a.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;


  let isUserValid = true;


  for (let i = 0; i < userArray.length; i++) {
    console.log(userArray[i].email)
    if (userArray[i].email == email && userArray[i].password == password) {

        location.href = 'index.html'

        // document.getElementById('loginUserName').innerHTML = userArray[i].Username;
        localStorage.setItem('loginUser',JSON.stringify(userArray[i]));
        isUserValid = false;
    }


  }

  if(isUserValid)

{
    document.getElementById('successMessage').innerHTML = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Oops!</strong> Incorrect Email or Password.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
}








});