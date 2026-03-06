function DownloadButton({ image }) {

  const downloadImage = () => {

    const link = document.createElement("a");

    link.href = `data:image/jpeg;base64,${image}`;
    link.download = "thumbnail.jpg";

    link.click();
  };

  return (
    <button className="download-btn" onClick={downloadImage}>
      Download Thumbnail
    </button>
  );
}

export default DownloadButton;