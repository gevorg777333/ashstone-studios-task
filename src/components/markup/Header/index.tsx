import {HEADER_LINKS} from "./constants";
import {HeaderLinks} from "./types";
import {SubMenuPopUp} from "./subMenuPopUp";
import menuIcon from '../../../assets/arrow-menu-icon.svg';
import styles from './styles.module.css'

const MenuItem = ({subMenu}: {subMenu: HeaderLinks}) => {
    return (
        <div className={styles.menuItem}>
            <span className={styles.menueTitle}>{subMenu.name}</span>
            <img src={menuIcon} alt="show-popup-icon"/>
            <SubMenuPopUp menu={subMenu.menu}/>
        </div>
    )
}

export default function Header() {
    return (
        <header className={styles.menu}>
            {
                HEADER_LINKS.map((subMenu) => <MenuItem subMenu={subMenu}/>)
            }
        </header>
    )
}
