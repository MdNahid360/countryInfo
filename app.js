fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))

// Display data
const displayData = country => {
    const ul = document.getElementById('countryMenu')
    // display data with forEach::::::::
    country.forEach(items => {
        console.log(items);
        const li = document.createElement('div')
        li.className = 'itembox'
        li.innerHTML = `
             <div id ="cItem" onclick ="details('${items.name.common}')"
             class = "crd box-items" >
                <img src = "${items.flags.png}" class="img-fluid flag" alt="">
                <div class="info">
                    <h5>${items.name.common}</h5>
                </div>
            </div>
        `
        ul.appendChild(li)
    });
    // display data with loop
    // for (let i = 0; i < country.length; i++) {
    //     const ans = country[i];
    //     console.log(ans.name.common);

    // }
}

// details country 
const details = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data[0].name.common))

}