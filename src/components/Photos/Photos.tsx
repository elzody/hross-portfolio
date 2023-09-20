import Photo from "./Photo/Photo";
import data from "../../data/photos.json";
import "./Photos.css";

interface Photo {
    url: string;
    description?: string;
}

interface PhotosProps {
    visible: boolean;
}

const Photos = (props: PhotosProps) => {
    const photos: Array<Photo> = data;

    if (props.visible) {
        return (
            <div className="photos">
                {
                    photos.map((photo: Photo) => (
                        <Photo key={photo.url} url={photo.url} description={photo.description} />
                    ))
                }
            </div>
        );
    }
}

export default Photos;