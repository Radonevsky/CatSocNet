import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import preloader from '../../assets/images/preloader.gif';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, isFetching, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        <span className={styles.button}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        </span>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return ((p === currentPage) && isFetching)
                    ? <span className={styles.preloader}><img src={preloader}/></span>
                    : <span className={p === currentPage ? styles.selectedPage : styles.page}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>{p}</span>
            })}
        <span className={styles.button}>
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
</span>

    </div>
}

export default Paginator;
/**/
