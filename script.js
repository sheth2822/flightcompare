
function searchFlights(){
 const data=[
  {airline:'United',price:'$620',stops:'1'},
  {airline:'Lufthansa',price:'$645',stops:'1'},
  {airline:'Air India',price:'$680',stops:'2'}
 ];
 const tbody=document.querySelector('#results tbody');
 tbody.innerHTML='';
 data.forEach(f=>{
   tbody.innerHTML += `<tr><td>${f.airline}</td><td>${f.price}</td><td>${f.stops}</td></tr>`;
 });
}
