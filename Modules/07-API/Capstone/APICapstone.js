const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

async function getCatDetails (details) {
    try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    const card = document.querySelector('.mainCard');

    // name, description, image.url

    console.log(data)

    let data1 = '';
    data.map((values) => {
        data1 += `<div class="card">
        <img id="catImg" src="${values.image?.url}" alt="">
        <p id="catName">${values.name}</p>
        <p id="catDescription">${values.description}</p>
    </div> `
    })

    card.innerHTML = data1;
    
} catch (error) {
        console.log(error)
    }
}
getCatDetails()