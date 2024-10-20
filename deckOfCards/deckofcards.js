const drawBtn = document.querySelector('#drawBtn')
const htmlOutput = document.querySelector('#cardImage')

function getApi() {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then(res => res.json())
        .then(data => {

            let linkSVG=data.cards[0].images.svg
            // console.log(linkSVG);
            let linkPNG=data.cards[0].images.png
            const image = document.createElement('img')
            image.setAttribute('src', linkPNG)
            htmlOutput.innerHTML = ''
            htmlOutput.appendChild(image)
            
            
        })
        .catch(err => {
            console.log(err)
            htmlOutput.innerHTML = 'Not Found'
        })

}

drawBtn.addEventListener('click', getApi)

/* <iframe src="" frameborder="0"></iframe> */