import data from '../../data/data.json'
import FeatureCard from './FeatureCards'

export default function Feature() {
    return (
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
    )
}