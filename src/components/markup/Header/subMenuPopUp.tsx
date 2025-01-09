import {HeaderLink} from "./types";
import subMenuIcon from '../../../assets/arrow-subMenu-icon.svg'
import styles from './styles.module.css'

const SubMenuPopUp = ({menu}: {menu: HeaderLink[]}) => {
    return (
        <div className={styles.subMenuPopUp}>
            {menu.map(({link, name}) => {
                return (
                    <a className={styles.subMenuLink} href={link} target='_blank'>
                        <li>{name}</li>
                        <img src={subMenuIcon} alt="Visit icon"/>
                    </a>
                )
            })}
        </div>
    )
}

export {SubMenuPopUp};
