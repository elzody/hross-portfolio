import { ObjectId } from "mongodb";
import Social from "./social";

interface Profile {
    id?: ObjectId;

    name: string;
    avatar: string;
    bio: string;

    occupations: Array<string>
    social: Array<Social>
}

export default Profile;