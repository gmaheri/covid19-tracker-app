window.onload = function(){
  this.getCovidStats();
}

function getCovidStats() {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/142')
  .then(function(res){
return res.json()
  })
  .then(function(data){
    const population = data.location.country_population;
    const update = data.location.last_updated;
    const confirmedCases = data.location.latest.confirmed
    const deaths = data.location.latest.deaths

    document.getElementById('population').innerHTML = population.toLocaleString('en');
    document.getElementById('update').innerHTML = update.substr(0,10);
    document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
    document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
    document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2}) + "%";
  })
  .catch(error => console.log(error));
  setTimeout(getCovidStats, 43200000 ) //refesh every after 12 hours
}
