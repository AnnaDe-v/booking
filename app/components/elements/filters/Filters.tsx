import styles from './Filters.module.scss'
import cn from 'classnames';
import {FC, useState} from "react";
import {TypeSetState} from "@/types/common";
import uniqBy from 'lodash/uniqBy';
import {IPlace} from "@/types/place";




interface IFilters {
    setPlaces: TypeSetState<IPlace[]>
    initialPlaces: IPlace[]
}

const Filters: FC<IFilters> = ({setPlaces, initialPlaces}) => {
    const [filter, setFilter] = useState('')

    const handleFilter = (location: string) => {
        if(filter === location) {
            setPlaces(initialPlaces)
            setFilter('')
        } else {
            setPlaces(initialPlaces.filter(place =>
                place.location.country.toLowerCase() === location.toLowerCase()))
            setFilter(location)
        }


    }

    return (
        <div className={styles.wrapper}>
            {uniqBy(initialPlaces, 'location.country').map(place =>
                <button
                    onClick={() => handleFilter(place.location.country)}
                    key={place.location.country}
                    className={cn({[styles.active]: place.location.country === filter,})}
                >{place.location.country}</button>)}
        </div>
    )
}
export default Filters;