import React, { useEffect } from "react";

const CloudinaryUploadWidget = ({
  setCheckmark,
  checkmark,
  images,
  setImages,
}) => {
  useEffect(() => {
    //   let i=1;
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDNAME,
        uploadPreset: "mfwa5awq",
        sources: ["local", "url", "google_drive", "facebook", "instagram"],
        maxFiles: 3,
        resourceType: "image",
        maxFileSize: 1000000,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Successfully uploaded!", result.info);
          setCheckmark((prevState) => [...prevState, "check"]);
          let imageData = {
            url: result.info.url,
            cloudinary_id: result.info.public_id,
          };
          //   console.log(imageData);
          setImages((prevState) => [...prevState, imageData]);
          //   console.log(images);
          //   `setImageUrl${i}`(result.url);
          //   `setImage${i}id`(result.public_id);
          //   i = i + 1;
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, []);

  return (
    <button
      type="button"
      id="upload_widget"
      className="bg-darkblue text-white py-1 px-3 border rounded-lg"
    >
      Upload Images
    </button>
  );
};

export default CloudinaryUploadWidget;
