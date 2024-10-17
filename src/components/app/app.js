import './app.css'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../menu-list/menu-list'
import MoviesAddFrom from '../movie-add-form/movie-add-form'

const App = () => {
    const data = [{ name: "Empire of Osman" }]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className= "search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList />
                <MoviesAddFrom />
            </div>
        </div>
    )
}

export default App