// uta dena hai button click ke bad location ki value
document.querySelector('button').addEventListener('click',()=>{

    // iput vale butoon ko seletect kjara usme maje uska .value chaiye
     const place = document.getElementById('location').value;

     function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
     }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=3d556f444a0a4180a9e113022261508&q=${place}&aqi=yes`)
     
    prom
    .then(response=>response.json())
    // it is a function-updateTemp
    .then((data)=> updateTemp(data));
    
})