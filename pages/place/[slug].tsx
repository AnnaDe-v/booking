import React from "react";
import {API_URL} from "../../app/constants";
import {NextPage} from "next";
import {IPlace} from "../../app/types/place";
import Place from "../../app/components/screens/place/Place";

interface IPlacePage {
    place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({place}) => {

    return (
        <Place place={place}/>
    )
}


export const getStaticPaths: getStaticPaths =
    async () => {

        const res = await fetch(`${API_URL}/places`)
        const places = await res.json()

        const paths = places.map(post => ({
            params: {slug: post.slug},
        }))

        return { paths, fallback: true}
    }

export const getStaticProps: getStaticProps =
    async ({params}) => {
        const res = await fetch(`${API_URL}/places/${params.slug}`)
        const place = await res.json()
        console.log(place)

        return {props: {place}}

    }



export default PlacePage;