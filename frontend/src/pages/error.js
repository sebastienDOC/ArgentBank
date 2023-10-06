import {Link} from 'react-router-dom';
import Header from '../components/Header';

export default function Error() {
    return (
        <div className='body-2'>
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <h1>ERROR 404</h1>
                    <h2>Oups, la page que vous recherchez n'existe pas !</h2>
                    <Link to='/'><p>Retour à la page d'acceuil</p></Link>
                </div>
            </div>
        </div>
    )
}