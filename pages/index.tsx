import Layout from "../app/components/common/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import HeadingSection from "../app/components/elements/home/headingSection/HeadingSection";
import Search from "../app/components/elements/home/search/Search";
import Filters from "../app/components/elements/filters/Filters";
import PopularPlaces from "../app/components/elements/home/popularPlaces/PopularPlaces";
import {useState} from "react";
import Meta from "../app/utils/Meta";
import { sanityClient } from '../app/sanity'
import {queries} from "../app/queries";

interface IHome {
    initialPlaces: Array<IPlace>
}

const Home: NextPage<IHome> = ({initialPlaces}) => {
    const [places, setPlaces] = useState(initialPlaces)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <Layout>
            <Meta title='Booking' description='Поиск места для отдыха и путешествия'/>
            <HeadingSection/>
            <div style={{width: '80%', margin: '0 auto'}}>
                <Search setPlaces={setPlaces}
                        initialPlaces={initialPlaces}
                        setIsLoading={setIsLoading}
                />
                <Filters
                    setPlaces={setPlaces}
                    initialPlaces={initialPlaces}
                />
                <PopularPlaces places={places} isLoading={isLoading}/>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps =
    async () => {
        const result = await sanityClient.fetch(queries.getPlaces)

        return {
            props: {
                initialPlaces: result
            },
        }
    }

export default Home;