import "./ProfileCard.css";

import data from "../../data/profile.json";

const ProfileCard = () => {
    return (
        <div className="profileCard">
            <img className="avatar" src={data.avatar} alt="Photo of Heather M. Ross" />

            <h2 className="name">{data.name}</h2>
            <span className="occupations">{data.occupations.join(", ")}</span>
            <span className="pronouns">{data.pronouns.join(" · ")}</span>

            <p className="bio">{data.bio}</p>

            <div className="social">
                {
                    data.social.map(item => (
                        <a href={item.link} target="_blank">
                            <img src={item.image} alt={item.name} />
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default ProfileCard;