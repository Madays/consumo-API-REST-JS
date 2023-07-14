searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
})

arrowBtn.addEventListener('click', () => {
    history.back()
    location.hash = '#home'
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
function navigator(){
    console.log({ location })

    if (location.hash.startsWith('#trends')){
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailPage()
    } else if (location.hash.startsWith('#category=')) {
        categoryPage()
    } else {
        homePage()
    }

    window.scrollTo(0,0)
}

function homePage(){
    console.log('Home')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMoviesPreview()
    getCategoriesPreview()
}

function categoryPage(){
    console.log('category')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    //['#category', 'id-name']
    const [_, categoryData] = location.hash.split('=')
    const [categoryId, categoryName] = categoryData.split('-')
    headerCategoryTitle.innerHTML = categoryName

    getMoviesByCategory(categoryId)
}

function movieDetailPage(){
    console.log('movie')

    headerSection.classList.add('header-container--long')
    // headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    //['#movie', 'id de la pelicula']
    const [_, movieId] = location.hash.split('=')
    getMovieById(movieId)
}

function searchPage(){
    console.log('search')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    //['#search', 'valor de busqueda']
    const [_, query] = location.hash.split('=')
    getMoviesBySearch(query)
}

function trendsPage(){
    console.log('trends')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    headerCategoryTitle.innerHTML = 'Tendencias'
    getTrendingMovies()
}