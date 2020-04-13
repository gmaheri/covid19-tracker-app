window.onload = () => {
  covidData();
}

const covidData = () => {
  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/142')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const update = data.location.last_updated;
    const confirmedCases = data.location.latest.confirmed;
    const deaths = data.location.latest.deaths;

    document.getElementById('update').innerHTML = update.substr(0,10);
    document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
    document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');

  })
  .catch(error => console.log(error));
  setTimeout(covidData, 43200000); //update every after 12 hours
}
