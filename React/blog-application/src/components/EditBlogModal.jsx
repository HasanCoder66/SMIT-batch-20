import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import * as React from "react";
import ButtonCmp from "../components/Button";
import Input from "../components/Input";
import { db } from "../firebase/config.js";
import { userId } from "./ProtectedRoute.jsx";
import { uploadImageToCloudinary } from "../helper/helper.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};



export default function EditBlogModal({open, handleClose, handleOpen, blogData, data }) {
  const [blogForm, setBlogForm] = React.useState({
    title: "",
    description: "",
    file: "",
  });


//   console.log(blogForm);
  



  
  
 

  const handleInputChange = (key, value) => {
    setBlogForm((prev) => ({ ...prev, [key]: value }));
  };




  
//   const saveDataIntoDB = async (url, data) => {
//     console.log(data);
//     //  return
//     try {
//       await addDoc(collection(db, "blogs"), {

//         blogImgUrl : url,
//         title : data.title,
//         description: data.description,
//         authorId : userId,
//         createdAt: serverTimestamp(),
//       });

//       console.log("blog created!");
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

// const updateBlogHandler = async (id) => {

//     const imgUrl = await uploadImageToCloudinary(blogForm.file)

//     console.log("image url milgaya.. ", imgUrl);
    
//     setBlogForm((prev) => ({...prev , blogImgUrl : imgUrl}))

//     console.log(blogForm);
    
//     try {
//         await setDoc(doc(db, "blogs", id), 
//             blogForm
//         );

//         console.log("blog updated successfully");
        
//     } catch (error) {
//         console.log(error.message);
        
//     }
// }



const updateBlogHandler = async (id) => {
  try {
    let imgUrl = blogForm.file;

    // Agar user ne new image select ki hai
    if (blogForm.file instanceof File) {
      imgUrl = await uploadImageToCloudinary(blogForm.file);
    }

    await setDoc(
      doc(db, "blogs", id),
      {
        title: blogForm.title,
        description: blogForm.description,
        blogImgUrl: imgUrl,
        createdAt: serverTimestamp(),
        authorId : userId
      },
      { merge: true }
    );

    console.log("blog updated successfully");
    handleClose();

  } catch (error) {
    console.log(error.message);
  }
};
  
  React.useEffect(() => {
    if(blogData){
        
        setBlogForm({
            title: blogData.title || "",
            description : blogData.description || "",
            file : blogData.blogImgUrl || ""
        })
    }
  }, [blogData])
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit your Blog
          </Typography>

          <Input
            label={"Blog Title"}
            type="text"
            id="title"
            handler={handleInputChange}
            value={blogForm.title}
          />
          <Input
            label={"Blog Description"}
            type="text"
            id="description"
            handler={handleInputChange}
            value={blogForm.description}
          />
          <Input
            label={"Choose File"}
            type="file"
            id="file"
            handler={handleInputChange}
            // value={blogForm.file}
          />

          <ButtonCmp handler={() => updateBlogHandler(data.id)} title="Update Blog" />
        </Box>
      </Modal>
    </div>
  );
}
