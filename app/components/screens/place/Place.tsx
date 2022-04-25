import React, {FC} from 'react'
import {IPlace} from '../../../types/place'
import Layout from '../../common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Information from "./Information/Information";
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({place}) => {
    return (
        <Layout isMaxWidth={false}>
            <Wrapper imageLink={place.imageLink}>
                <Header/>
                <Information place={place}/>
                <BookTrip/>
            </Wrapper>

        </Layout>
    )
}

export default Place