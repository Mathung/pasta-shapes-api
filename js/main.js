document.querySelector('#getPasta').addEventListener('click', getPasta) 

async function getPasta() {
    let res = await fetch('/randomPasta')
    const data = await res.json()
    let i = Math.floor(Math.random()*data.length)

    document.querySelector('#pastaName').innerHTML = data[i].name;
    document.querySelector('#pastaPic').src = data[i].image
    document.querySelector('#pastaType').innerHTML = data[i].type
    document.querySelector('#pastaHoles').innerHTML = data[i].holes
    document.querySelector('#pastaThickness').innerHTML = data[i].thickness
    document.querySelector('#pastaTexture').innerHTML = data[i].shape
    document.querySelector('#pastaDescription').innerHTML = data[i].description
}