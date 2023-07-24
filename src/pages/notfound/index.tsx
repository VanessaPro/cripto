import {Link} from 'react-router-dom';
import styles from './notfound.module.css'


export function Notfound (){
    return(
        <div className={styles.container}>
            <h1>Símbolo da moeda digitado não existe</h1>
            <Link to="/">
                Acessar cripto moedas
            </Link>
        </div>
    )
}