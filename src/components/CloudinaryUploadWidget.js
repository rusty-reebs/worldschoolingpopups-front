import React, { useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";

const CloudinaryUploadWidget = ({ setCheckmark, setImages }) => {
  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.CLOUDNAME,
        uploadPreset: "mfwa5awq",
        sources: ["local", "url", "google_drive", "facebook", "instagram"],
        maxFiles: 3,
        resourceType: "image",
        maxFileSize: 1000000,
        multiple: false,
        cropping: true,
        croppingCoordinatesMode: "custom",
        croppingAspectRatio: 1.32,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Successfully uploaded!", result.info);
          setCheckmark((prevState) => [...prevState, "check"]);
          let imageData = {
            url: result.info.url,
            cloudinary_id: result.info.public_id,
          };
          setImages((prevState) => [...prevState, imageData]);
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

const transformImages = (imagesArray) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDNAME,
    },
  });
  if (imagesArray.length > 1) {
    let processedImages = imagesArray.map((image) => {
      return cld
        .image(image.cloudinary_id)
        .resize(crop().gravity(focusOn("custom")));
    });
    return processedImages;
  } else {
    let processedImage = cld
      .image(imagesArray.cloudinary_id)
      .resize(crop().gravity(focusOn("custom")));
    return processedImage;
  }
};

export { CloudinaryUploadWidget, transformImages };
