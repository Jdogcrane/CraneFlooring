import React, { useEffect, useState } from 'react';
import '../../Styles/gallery.css';

const imageContext = require.context(
    '../images/gallery',
    false,
    /\.(png|jpe?g|webp|svg)$/
);

const images = imageContext.keys().map((imageFile, index) => ({
    url: imageContext(imageFile),
    order: index,
}));

const initialImageOrder = [
    0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11
];

export default function Gallery() {
    const [imageOrder] = useState(initialImageOrder);
    const [selectedImage, setSelectedImage] = useState(null);

    const orderedImages = imageOrder
        .map(index => images.find(image => image.order === index))
        .filter(Boolean);

    useEffect(() => {
        if (selectedImage === null) {
            document.body.style.overflow = '';
            return;
        }

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <>
            <div className="spaceDown invisible">
                <p>-</p>
            </div>

            <main className="center contain1 animate__animated spaceDown animate__delay-1s animate__fadeIn">
                <div className="gallery-header">
                    <p className="black-text normalText">
                        Project
                    </p>

                    <p className="black-text greyText strong title">
                        Gallery
                    </p>
                </div>

                <div className="gallery-grid">
                    {orderedImages.map((image, index) => (
                        <button
                            key={image.order}
                            type="button"
                            className="gallery-item"
                            onClick={() => setSelectedImage(image)}
                            aria-label={`View Crane Flooring project ${index + 1}`}
                        >
                            <img
                                src={image.url}
                                alt={`Crane Flooring hardwood flooring project ${index + 1}`}
                                width="400"
                                height="400"
                                loading={index < 2 ? 'eager' : 'lazy'}
                                decoding="async"
                            />
                        </button>
                    ))}
                </div>
            </main>

            {selectedImage && (
                <div
                    className="gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Expanded project image"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        className="gallery-lightbox-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        &times;
                    </button>

                    <img
                        src={selectedImage.url}
                        alt="Crane Flooring hardwood flooring project"
                        className="gallery-lightbox-image"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}