function PhotoPreview({ selectedImage }) {
  return (
    selectedImage && (
      <img
        alt="not found"
        src={URL.createObjectURL(selectedImage)}
        className="rounded-full object-cover h-32 w-32"
      />
    )
  );
}

export default PhotoPreview;
