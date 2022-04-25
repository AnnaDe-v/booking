import React, {FC} from 'react';
import styles from './Wrapper.module.scss';

const Wrapper: FC<{imageLink: string}> = ({imageLink, children}) => {
    return (
        <div
            className={styles.wrapper}
             style={{backgroundImage: `url(${imageLink})` }}
        >
            {children}
        </div>
    );
};

export default Wrapper;