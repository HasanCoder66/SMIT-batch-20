import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { userId } from "./ProtectedRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config.js";
import { toast, ToastContainer } from "react-toastify";
import CreateBlogModal from "./CreateBlogModal.jsx";
import EditBlogModal from "./EditBlogModal.jsx";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard({ data, getBlogsData, setAlBlogs }) {
  const [expanded, setExpanded] = React.useState(false);
  const [userId, setUserId] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [blogData ,setBlogData] = React.useState({})
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserId(uid);

        // ...
      } else {
        setUserId(null);
        // User is signed out
        // ...
      }
    });
  };

  const deleteHandler = async (blogId) => {
    console.log(blogId);

    try {
      await deleteDoc(doc(db, "blogs", blogId));
      // console.log("blog deleted successfully!");

      toast.success("blog deleted successfully!");
      getBlogsData();
    } catch (error) {
      console.log(error.message);
    }
  };


   const getSingleBlogData = async (id) => {
     
  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());

    setBlogData(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
    }

  const editHandler = async () => {
    try {
      handleOpen()
      getSingleBlogData(data.id)
    } catch (error) {
      console.log(error.message);
    }
  };




  React.useEffect(() => {
    getUser();
  }, []);

  console.log(userId);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          // subheader={data.createdAt}
        />
        <CardMedia
          component="img"
          height="194"
          image={data.blogImgUrl || data.file}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.description}
          </Typography>
        </CardContent>
        {data.authorId == userId ? (
          <CardActions disableSpacing>
            <IconButton onClick={editHandler} aria-label="add to favorites">
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => deleteHandler(data.id)}
              aria-label="share"
            >
              <DeleteIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        ) : (
          ""
        )}
      </Card>

      <ToastContainer />

      {open && (
        <EditBlogModal
        data={data}
        blogData={blogData}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
