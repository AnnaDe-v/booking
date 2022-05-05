import {IPlace} from "@/types/place";
import {NextApiRequest, NextApiResponse} from "next";


export const places: IPlace[] = [
    {
        _id: 'fjnkzjsnfnzkmslkfsl3ootis545454544646',
        slug: 'tokyo',
        location: {country: 'Japan', city: 'Tokyo', regionUn: 'Asia'},
        description: 'Tokyo Japanese: historically Tokio and officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital[8] and largest city of Japan. Its metropolitan area is the most populous in the world,[5] with an estimated 37.468 million residents in 2018. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan\'s main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2022, the prefecture has an estimated population of 13.99 million.[4]',
        distance: 1587,
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        duration: '10 days',
        rating: 5
    },
    {
        _id: 'fjnkzjsnfnzkmslkfsl3ootigzskgnks',
        slug: 'venezia',
        location: {country: 'Italy', city: 'Venezia', regionUn: 'Europe'},
        description: 'Город на северо-востоке Италии. Административный центр области Венеция и одноимённой территориальной единицы, приравненной к провинции. Образует коммуну, разделённую на 6 самоуправляемых районов. Покровителем города считается апостол Марк, евангелист, чьи мощи хранятся здесь же в Соборе Св. Марка, в связи с чем в город всегда приезжало много паломников-христиан со всего мира.',
        distance: 467,
        imagePath: 'http://localhost:3000/images/places/italy.jpg',
        duration: '6 days',
        rating: 5
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}