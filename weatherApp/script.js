const checkBtn = document.querySelector('#checkBtn');

checkBtn.addEventListener('click',async  (e)=>{

    e.preventDefault();

    let cityName = document.getElementById('cityName').value;

        try {
          const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=33b692cbdb744846ad770256242708&days=5&q=${cityName}`);
          console.log(response);
    
    
          document.getElementById('successMessage').innerHTML = `<h1>${response.data.current.temp_c}°C</h1> <h3>${response.data.location.name}</h3>
          <img src='https://${response.data.current.condition.icon}' />
          <p>${response.data.current.condition.text}</p>`
  
    
        } catch (error) {
          console.error(error);
        }


})




