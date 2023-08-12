function PhotoPreview({ selectedImage, border }) {
  return (
    selectedImage && (
      <img
        alt="not found"
        src={URL.createObjectURL(selectedImage)}
        className="rounded-full object-cover h-32 w-32 border-solid border-custom-primary"
        style={{
          borderWidth: `${border}px`,
        }}
      />
    )
  );
}

export default PhotoPreview;
