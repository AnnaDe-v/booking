import React, {FC, useState} from 'react';
import {BsBookmarkHeart} from 'react-icons/bs';
import styles from './Header.module.scss'
import {IFavorites} from "../../../../types/place";
import Link from 'next/link';

const data: IFavorites[] = [
    {
        name: 'Japan, Japan',
        slug: 'tokio'
    }
]


const Favorites: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen) }>
                <span className={styles.buttonWrapper}>
                    <BsBookmarkHeart size={20} color='white' />
                </span>
            </button>
            {isOpen && (
                <ul>
                    {data.map(item => (<li key={item.slug}>
                            <Link href={`/place/${item.slug}`}>
                                <a>{item.name}</a>
                            </Link>
                        </li>)
                    )}
                </ul>
                )}
        </div>
    );
};

export default Favorites;