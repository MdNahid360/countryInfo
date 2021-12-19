fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))

// Display data
const displayData = country => {
    const ul = document.getElementById('countryMenu')
    for (let i = 0; i < country.length; i++) {
        const ans = country[i];
        console.log(ans.name.common);

    }
}