import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const mediaItems = [
  { id: 1, src: '/path/to/image1.jpg', year: '2023', event: 'Competition' },
  { id: 2, src: '/path/to/image2.jpg', year: '2022', event: 'Workshop' },
  { id: 3, src: '/path/to/image3.jpg', year: '2023', event: 'Competition' },
  { id: 4, src: '/path/to/image4.jpg', year: '2021', event: 'Workshop' },
];

const MediaGallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.year === filter || item.event === filter);

  const openLightbox = (src) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="media-gallery py-5 bg-light">
      <div className="container px-4">
        <h2 className="display-4 text-center mb-5 text-primary">Media Gallery</h2>
        <div className="filter-buttons d-flex justify-content-center gap-2 mb-4 flex-wrap">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button 
            variant={filter === '2023' ? 'default' : 'outline'}
            onClick={() => setFilter('2023')}
          >
            2023
          </Button>
          <Button 
            variant={filter === '2022' ? 'default' : 'outline'}
            onClick={() => setFilter('2022')}
          >
            2022
          </Button>
          <Button 
            variant={filter === '2021' ? 'default' : 'outline'}
            onClick={() => setFilter('2021')}
          >
            2021
          </Button>
          <Button 
            variant={filter === 'Competition' ? 'default' : 'outline'}
            onClick={() => setFilter('Competition')}
          >
            Competition
          </Button>
          <Button 
            variant={filter === 'Workshop' ? 'default' : 'outline'}
            onClick={() => setFilter('Workshop')}
          >
            Workshop
          </Button>
        </div>
        <div className="row g-4">
          {filteredMedia.map(item => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
              <Card 
                className="gallery-card cursor-pointer hover-shadow-lg transition"
                onClick={() => openLightbox(item.src)}
              >
                <div 
                  className="gallery-image rounded"
                  style={{
                    backgroundImage: `url(${item.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBottom: '75%', // 4:3 aspect ratio
                    position: 'relative'
                  }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <img 
            src={selectedImage} 
            alt="Media" 
            className="lightbox-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <style>
        {`
          .media-gallery {
            overflow: hidden;
          }

          .filter-buttons {
            margin: -0.25rem;
          }

          .filter-buttons > * {
            margin: 0.25rem;
          }

          .gallery-card {
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .gallery-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
          }

          .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 2rem;
          }

          .lightbox-image {
            max-height: 90vh;
            max-width: 90vw;
            object-fit: contain;
            border-radius: 0.5rem;
          }

          @media (max-width: 576px) {
            .lightbox-overlay {
              padding: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default MediaGallery;