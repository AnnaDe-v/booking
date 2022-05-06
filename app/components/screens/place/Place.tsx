import React, {FC} from 'react';
import {IPlace} from '@/types/place';
import Layout from '../../common/Layout';
import Information from "./Information/Information";
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import Meta from "../../../utils/Meta";

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({place}) => {
    return (
        <Layout isMaxWidth={false}>
            <Meta title={place.location.city} description={`Best city for you traveling ${place.location.city}`} image={place.imagePath}/>
            <Wrapper imagePath={place.imagePath}>
                <Header/>
                <Information place={place}/>
            </Wrapper>
        </Layout>
    )
}

export default Place