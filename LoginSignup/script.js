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



let signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click', (a) => {

  a.preventDefault();



  let Username = document.getElementById('Username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let country = document.getElementById('country').value;
  let dob = document.getElementById('dob').value;
  let gender = document.getElementById('gender').value;
  let zipcode = document.getElementById('zipcode').value;
  let phoneNumber = document.getElementById('phoneNumber').value;




  for (let i = 0; i < userArray.length; i++) {
    console.log(userArray[i].email)
    if (userArray[i].email == email) {
      document.getElementById('successMessage').innerHTML = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Oops!</strong> You are already registered.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

      return;


    }

  }




  let registeredDate = new Date();

  // console.log(registeredDate)

  const personObj = {
    Username,
    email,
    password,
    address,
    city,
    country,
    dob,
    gender,
    zipcode,
    phoneNumber,
    registeredDate
  }


  userArray.push(personObj);



  // console.log(userArray)


  let userStringfy = JSON.stringify(userArray);

  // console.log(userStringfy)


  localStorage.setItem('usersData', userStringfy);




  document.getElementById('signUpForm').reset();

  document.getElementById('successMessage').innerHTML = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Thank you!</strong> You are registered Successfully.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`








})


















// array = ['Arif',32948932483,19,3454,'Software Enginner']

// array[3]


// person = {
//    username: 'Arif'
// }

// person.username





