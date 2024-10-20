const nameBtn = document.querySelector('#nameBtn')
const htmlOutput = document.querySelector('#htmlOutput')
const seed = 'Luke Skywalker'

function getApi() {
    const inputName = document.querySelector('#inputName').value
    fetch(`https://www.swapi.tech/api/people/?name=${inputName}`)
        .then(res => res.json())
        .then(data => {
            let nameOfChar = data.result[0].properties.name
            let height = data.result[0].properties.height
            let mass = data.result[0].properties.mass
            let gender = data.result[0].properties.gender
            let hair_color = data.result[0].properties.hair_color
            htmlOutput.innerHTML =
                `Name: ${nameOfChar}, Height: ${height} cm, Mass: ${mass} kg, Gender: ${gender}, Hair Color: ${hair_color}`
        })
        .catch(err => {
            console.log(err)
            htmlOutput.innerHTML = 'Not Found'
        })

}

nameBtn.addEventListener('click', getApi)