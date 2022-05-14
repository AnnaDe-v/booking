import styles from './PopularPlaces.module.scss';
import {FC} from "react";
import {IPlace} from "@/types/place";
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { urlFor } from '../../../../sanity'

interface IPopularPlaces {
    places: IPlace[]
    isLoading: boolean
}

const PopularPlaces: FC<IPopularPlaces> = ({places, isLoading}) => {
    return (
        <div className={styles.wrapper}>
            <h2>Popular places</h2>
            {
                isLoading ? (<Skeleton
                        count={1}
                        height={200}
                        borderRadius={20}
                        baseColor='#161617'
                        highlightColor='#fff'
                        />) : places.length ?

                    ( places.map(place => (
                <Link href={`place/${place.slug.current}`}
                      key={place._id}
                >
                    <a

                        className={styles.item}
                        style={{ backgroundImage: `url(${urlFor(place.imagePath).url()})` }}
                    >
                        <span className={styles.heading}>
                            {place.location.city + ', ' + place.location.country}
                        </span>
                    </a>
                </Link>
            ))
                    ) : <div style={{color: '#fff'}}>Not found</div>}
        </div>


    )
}
export default PopularPlaces;