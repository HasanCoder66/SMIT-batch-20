import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../components/Input";
import ButtonCmp from "../components/Button";
import { uploadImageToCloudinary } from "../helper/helper.js";
import { db } from "../firebase/config.js";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { userId } from "./ProtectedRoute.jsx";

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

export default function CreateBlogModal() {
  const [blogForm, setBlogForm] = React.useState({
    title: "",
    description: "",
    file: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (key, value) => {
    setBlogForm((prev) => ({ ...prev, [key]: value }));
  };

  const saveDataIntoDB = async (url, data) => {
    console.log(data);
    //  return
    try {
      await addDoc(collection(db, "blogs"), {

        blogImgUrl : url,
        title : data.title,
        description: data.description,
        authorId : userId,
        createdAt: serverTimestamp(),
      });

      console.log("blog created!");
      
    } catch (error) {
      console.log(error);
    }
  };

  const postBlogHandler = async () => {
    try {
      // console.log("post blog handler is working!");
      // console.log(blogForm);

      const imgUrl = await uploadImageToCloudinary(blogForm.file);

      saveDataIntoDB(imgUrl, blogForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Create a Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create your Blog
          </Typography>

          <Input
            label={"Blog Title"}
            type="text"
            id="title"
            handler={handleInputChange}
            // value={blogForm.title}
          />
          <Input
            label={"Blog Description"}
            type="text"
            id="description"
            handler={handleInputChange}
            // value={blogForm.description}
          />
          <Input
            label={"Choose File"}
            type="file"
            id="file"
            handler={handleInputChange}
            // value={blogForm.file}
          />

          <ButtonCmp handler={postBlogHandler} title="Create Blog" />
        </Box>
      </Modal>
    </div>
  );
}
