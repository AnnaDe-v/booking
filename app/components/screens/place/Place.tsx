import React, {FC} from 'react'
import {IPlace} from '../../../types/place'
import Layout from '../../common/Layout'
import Information from "./Information/Information";
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import Map from "./Information/Map";

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({place}) => {
    return (
        <Layout isMaxWidth={false}>
            <Wrapper imageLink={place.imageLink}>
                <Header/>
                <Information place={place}/>
                <Map location={place.location}/>
            </Wrapper>
        </Layout>
    )
}

export default Place