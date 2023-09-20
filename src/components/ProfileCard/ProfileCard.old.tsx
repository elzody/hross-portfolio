import Profile from "../../models/profile.ts";

import "./ProfileCard.css";

interface ProfileProps {
    profile: Profile;
}

const ProfileCard = (props: ProfileProps) => {
    return (
        <div className="profileCard">
            <div>
                <img src={props.profile.avatar} alt="Photo of Mark Ross" />

                <span className="name">{props.profile.name}</span>
                <span className="occupations">{props.profile.occupations.join(", ")}</span>
            </div>

            <div>
                <p className="bio">{props.profile.bio}</p>

                <div className="buttons">
                    <button className="downloadCV" type="button">
                        Download CV
                    </button>
                    <button className="contactMe" type="button">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;