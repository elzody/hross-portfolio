import { useState, useRef, useEffect } from "react";
import "./Photo.css";

import ImageModal from "../ImageModal/ImageModal.tsx";

interface PhotoProps {
    url: string;
    description?: string;
}

const Photo = (props: PhotoProps) => {
    const [imageModal, setImageModal] = useState<boolean>(false);
    const [photoVisibility, setPhotoVisibility] = useState<boolean>(false);
    const photoRef = useRef(null);

    const intersect_options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    }

    const intersect_callback = (entries, observer) => {
        const [ entry ] = entries;

        setPhotoVisibility(entry.isIntersecting);
        
        entry.target.style["opacity"] = (entry.isIntersecting) ? "1.0" : "0.0";
    }

    useEffect(() => {
        const intersect_observer = new IntersectionObserver(intersect_callback, intersect_options);

        if (photoRef.current) {
            intersect_observer.observe(photoRef.current);
        }

        return () => {
            if (photoRef.current) {
                intersect_observer.unobserve(photoRef.current);
            }
        }
    }, [photoRef, intersect_options, intersect_callback]);

    const modalStateHandler = (modalState: boolean) => {
        setImageModal(modalState);
    }

    if (imageModal) {
        return (
            <ImageModal
                imageUrl={props.url.replace("thumbnails", "fullsize")}
                onClick={() => modalStateHandler(false)} />
        );
    } else {
        if (photoVisibility) {
            return (
                <article className="photo" ref={photoRef} onClick={() => modalStateHandler(true)}>
                    <img 
                        loading="lazy"
                        src={props.url}
                        alt={props.description ?? "Photo taken by Heather M. Ross"} />
                </article>
            );
        } else {
            return <article className="photo" ref={photoRef}></article>
        }
        
    }
}

export default Photo;
