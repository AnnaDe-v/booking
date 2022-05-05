import React, {FC} from 'react';
import {Head} from "next/head";

interface IMeta {
    title: string
    description?: string
}

const Meta: FC<IMeta> = ({title, description}) => {
    return (
        <div>
            <Head>
                <title itemProp='headline'>{title} | Travel App</title>
                {description ? (
                    <>
                        <meta
                            itemProp='description'
                            name='description'
                            content={onlyText(description, 152)}
                        />
                        <link rel='canonical' href={currentUrl} />
                        <meta property='og:locale' content='en' />
                        <meta property='og:title' content={title} />
                        <meta property='og:url' content={currentUrl} />
                        <meta property='og:image' content={image || '/logo.jpg'} />
                        <meta property='og:site_name' content='Travel App' />
                        <meta
                            property='og:description'
                            content={onlyText(description, 197)}
                        />
                    </>
                ) : (
                    <meta name='robots' content='noindex, nofollow' />
                )}
            </Head>
        </div>
    );
};

export default Meta;