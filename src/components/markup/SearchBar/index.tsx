import logotype from '../../../assets/logotype.png'
import {Search} from './Search';
import styles from './styles.module.css'

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.section}>
                <div className={styles.logoSection}>
                    <img src={logotype} alt="logo"/>
                </div>
                <Search />
            </div>
        </div>
    )
}
