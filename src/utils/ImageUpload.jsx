import axios from "axios";

export const UploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const apiKey = import.meta.env.VITE_IMAGE_UPLOAD_API;
  const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response
};
