let firstMovie
let moviesData
fetch('http://localhost:3000/movies')
.then(resp => resp.json())
.then(moviesArray => {
    
    moviesData = moviesArray
    moviesArray.forEach((movieObject) => {
    firstMovie = moviesArray[0]
    
    let myImg = document.createElement('img')
    myImg.src = movieObject.image
    myImg.alt = movieObject.title

    document.getElementById('movie-list').append(myImg)

    myImg.addEventListener('click', (event) => {
        renderMovie(movieObject)
    })

})})
.then(() => {
    renderMovie(firstMovie)
})
.then(() => {
    doBloodForm()
})


function doBloodForm() {
    const bloodForm = document.querySelector('#blood-form')
    bloodForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const bloodInput = document.querySelector('#blood-amount')
        document.getElementById('amount').textContent = bloodInput.value
        
        const currentBloodAmount = parseInt(document.querySelector('#amount').textContent)
        document.querySelector('#amount').textContent = currentBloodAmount + parseInt(bloodInput.value)
   
   
    }


)}

function renderMovie(movie) {
    let img = document.getElementById('detail-image')
    let title = document.getElementById('title')
    let yearReleased = document.getElementById("year-released")
    let descrip = document.getElementById('description')
    const watch = document.querySelector('#watched')
    let amountOfBlood = document.getElementById('amount')
    img.src = movie.image
    title.textContent = movie.title
    yearReleased.textContent = movie.release_year
    descrip.textContent = movie.description
    
    watch.addEventListener('click', (event) => {
        console.log(event)
        movie.watched = !movie.watched
        if(movie.watched) {
            watch.textContent = 'Watched'
        } else {
            watch.textContent = 'Unwatched'
        }
    
    })

    if (movie.watched) {
        watch.textContent = 'Watched'
    } else {
        watch.textContent = 'Unwatched'
    }

    // amountOfBlood.textContent = movie.blood_amount
}



