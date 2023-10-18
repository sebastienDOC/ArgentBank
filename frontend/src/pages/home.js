import Header, { getUser } from '../components/Header/Header';
import FeatureCard from '../components/Feature/FeatureCards'
import data from '../data/data.json'
import { useDispatch } from 'react-redux';
import { getUserProfile } from "../redux/authSlice";
import { useEffect, useState } from 'react';

export default function Home() {
    const [user, setUser] = useState(getUser())
    let token = localStorage.getItem('token')
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            dispatch(getUserProfile(token))
        }
    },[])

    return (
        <div className='container'>
            <Header />
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </div>
                </section>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {data[0].features.map((feature) => 
                        <FeatureCard 
                            cover={feature.cover}
                            alt={feature.alt}
                            title={feature.title}
                            description={feature.description}
                            key={feature.id}
                        />
                    )}
                </section>
            </main>
        </div>
    )
}