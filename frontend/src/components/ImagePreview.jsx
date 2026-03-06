function ImagePreview({ images }) {

  if (!images || images.length === 0) return null;

  return (
    <div className="image-grid">

      {images.map((img, index) => (

        <img
          key={index}
          src={`data:image/jpeg;base64,${img}`}
          alt="thumbnail"
        />

      ))}

    </div>
  );
}

export default ImagePreview;