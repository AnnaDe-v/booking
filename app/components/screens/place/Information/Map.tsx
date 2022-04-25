import { FC } from 'react'
import {IPlace} from "../../../../types/place";



const Map: FC<{ place: IPlace }> = ({ place }) => {

    return <div style={{backgroundImage: `url(${place.mapImage})`, height:'250px', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
}

export default Map