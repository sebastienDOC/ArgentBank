import Header from '../components/Header';
import Feature from '../components/Feature/Feature';

export default function Home() {

    return (
        <div className='body-2'>
            <Header />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <Feature /> 
            </main>
        </div>
    )
}