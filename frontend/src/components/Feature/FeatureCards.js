export default function FeatureCard({cover, alt, title, description, id }) {
	function getImgCover(img) {
        var images = require("../../assets" + img);
        return images;
    }
	return (
		<div className="feature-item" key={id}>
            <img 
                src={getImgCover(cover)}
                alt={alt} 
                className="feature-icon" 
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
	)
}

