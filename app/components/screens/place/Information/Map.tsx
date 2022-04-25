import { FC } from 'react'
import {IPlace} from "../../../../types/place";
import styles from './Information.module.scss'


const Map: FC<{ place: IPlace }> = ({ place }) => {

    return <div className={styles.map}></div>
}

export default Map