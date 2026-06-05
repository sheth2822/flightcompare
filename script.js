
function searchFlights(){
const flights=[
{airline:'United Airlines',price:620,stops:'1 Stop',bookingUrl:'https://www.united.com'},
{airline:'Lufthansa',price:645,stops:'1 Stop',bookingUrl:'https://www.lufthansa.com'},
{airline:'Air India',price:690,stops:'2 Stops',bookingUrl:'https://www.airindia.com'},
{airline:'British Airways',price:705,stops:'1 Stop',bookingUrl:'https://www.britishairways.com'}
];

flights.sort((a,b)=>a.price-b.price);
const cheapest=flights[0];

document.getElementById('bestDeal').innerHTML=`
<div class="best-price">
<h2>🔥 Lowest Fare</h2>
<p><strong>${cheapest.airline}</strong> - $${cheapest.price}</p>
<a href="${cheapest.bookingUrl}" target="_blank" class="book-btn">Book Lowest Fare</a>
</div>`;

const tbody=document.querySelector('#results tbody');
tbody.innerHTML='';

flights.forEach(f=>{
tbody.innerHTML+=`<tr>
<td>${f.airline}</td>
<td>$${f.price}</td>
<td>${f.stops}</td>
<td><a href="${f.bookingUrl}" target="_blank" class="book-btn">Book Now</a></td>
</tr>`;
});
}
