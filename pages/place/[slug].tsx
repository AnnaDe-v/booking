import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IPlace } from '@/types/place'
import { sanityClient } from '../../app/sanity'
import { queries } from 'queries'
import Place from '@/components/screens/place/Place'

interface IPlacePage {
    place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
    return <Place place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await sanityClient.fetch(`${queries.getPlaces}{slug}`)

    // @ts-ignore
    const paths = result.map(place => ({
        params: { slug: place.slug.current }
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // @ts-ignore
    const place = await sanityClient.fetch(queries.getPlace(String(params.slug)))

    return { props: { place } }
}

export default PlacePage