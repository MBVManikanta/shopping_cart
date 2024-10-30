import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is installed and imported

const images = [
  { id: 1, src: '/src/image1.jpg', alt: 'Image 1', details: 'Fruits' },
  { id: 2, src: '/src/image2.jpg', alt: 'Image 2', details: 'Fruits' },
  { id: 3, src: '/src/image3.jpg', alt: 'Image 3', details: 'Fruits' },
];

const Gallery = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4 mb-4">
            <div className="card">
              <Link to={`/image/${image.id}`}>
                <img src={image.src} alt={image.alt} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{image.alt}</h5>
                <p className="card-text">{image.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
