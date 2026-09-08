import axios from "axios";

export const uploadImageToCloudinary = async (file) => {

  try {
    const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "user_profile"
  );

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dpvxkqhi8/image/upload",
    formData
  );


  return response.data.secure_url
  } catch (error) {
    console.log("Error in cloudinary file -->",error);
    
  }
  


};

