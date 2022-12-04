import SearchBar from '../SearchBar/SearchBar';
import Styles from './NavBar.module.css'

export default function NavBar ({onSearch}){

  return (
    <nav className={Styles.navBar}>
      <div className={Styles.title}>Sailor Weather App</div>
      <div className={Styles.search}>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  )
}
