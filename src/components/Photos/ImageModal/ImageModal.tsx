import "./ImageModal.css";

interface ImageModalProps {
    imageUrl: string;
    onClick: () => void;
}

const ImageModal = (props: ImageModalProps) => {
    return (
        <div className="imageModal">
            <img loading={"lazy"} src={props.imageUrl} alt={"Photo taken by Heather M. Ross"} />
            <button type="button" onClick={props.onClick}>Close</button>
        </div>
    );
}

export default ImageModal;
