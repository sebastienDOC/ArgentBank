import {Link} from 'react-router-dom';
import Header from '../components/Header/Header';

export default function Error() {
    return (
        <div className='container'>
            <Header />
            <div className="hero"></div>
            <div className="error">
                <p className='error-size'>ERROR 404</p>
                <p className='error-size'>Oups, la page que vous recherchez n'existe pas !</p>
                <Link to='/'><p>Retour à la page d'acceuil</p></Link>
            </div>
        </div>
    )
}