import styles from '../styles/layout/PageTitle.module.css';

export default function PageTitle(props) {
    return (
        <div className={styles.titleContainer} style={props.featuredimg ? { backgroundImage: `url('${props.featuredimg}')` } : {}}>
            <div className="container">
                <div className={styles.titleText}>
                    <h1 className={styles.title}>{props.titleField}</h1>
                    <h2 className={styles.subTitle}>{props.subField}</h2>
                </div>
            </div>
        </div>
    )
}