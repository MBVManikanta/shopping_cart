import { useParams } from 'react-router-dom';

const images = [
  { id: 1, src: '/src/image1.jpg', alt: 'Image 1', description: 'Details about Image 1' },
  { id: 2, src: '/src/image2.jpg', alt: 'Image 2', description: 'Details about Image 2' },
  { id: 3, src: '/src/image3.jpg', alt: 'Image 3', description: 'Details about Image 3' },
];

const ImageDetails = () => {
  const { id } = useParams();
  const image = images.find((img) => img.id === parseInt(id, 10));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <h1>{image.alt}</h1>
      <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetails;