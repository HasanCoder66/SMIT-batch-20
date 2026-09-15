import axios from "axios";

export const uploadImageToCloudinary = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "react_profile_upload"
  );

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dpvxkqhi8/image/upload", formData
  );
  

  return response.data.secure_url;
};