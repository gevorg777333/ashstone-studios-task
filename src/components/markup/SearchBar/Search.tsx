import search from '../../../assets/search.svg';
import styles from './styles.module.css';
import {useCallback, useState} from "react";
import useSearch from "../../../hooks/useFilter.hooks";
import {debounce} from "../../../helper/debounce";
const Search = () => {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const { setSearchParams } = useSearch();
    const handleSearch = useCallback(
        debounce((value: string) => {
            setSearchParams({ searchTerm: value });
        }, 1000),
        []
    );

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
    };

    const handleMouseDown = () => {
        setIsSearch(true);
    }
    const handleMouseLeave = () => {
        setIsSearch(false);
    }

    return (
        <div className={styles.searchWrapper}>
            {
                isSearch
                    ? <input onChange={onInputChange} onMouseLeave={handleMouseLeave} placeholder='Search posts'  className={styles.search} type="text"/>
                    : <img onMouseDown={handleMouseDown}  className={styles.searchIcon} src={search} alt="search-icon"/>
            }
        </div>
    )
}

export {Search}
