import PageTitle from "../../components/PageTitle";
import styles from "../../styles/pages/page.module.css";


export default async function ErrorHome() {


    return (
        <main className={styles.globalMain}>
            <PageTitle titleField="Page Not Found" subField="Oops! That page can't be found."  />
            <div className="container">
                <div className="error-page-container">
                    <h6>Page doesn&#39;t exist</h6>
                    The page are looking for has been moved or doesn&#39;t exist anymore, if you like you can return to our <a href="https://progressionstudios.com">homepage</a> or try one of the pages in the navigation.
                </div>
            </div>
        </main>
    );
}