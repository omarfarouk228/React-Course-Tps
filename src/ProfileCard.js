import './ProfileCard.css';

function ProfileCard(props) {
    const { name, image, description, socialNetworks} = props
    return (
        <div className="profile-card">
            <div className="profile-image-container">
                <img src={image} alt={name} className="profile-image" />
            </div>
            <div className="profile-content">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-description">{description}</p>
                <div className="profile-socials">
                    <a href={socialNetworks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={socialNetworks.github} target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;