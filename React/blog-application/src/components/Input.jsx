import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({id, label, type, handler, value }) {
  return (
    <Box
      className="mb-3 mt-5"
      component="form"
      sx={
        {
          // backgroundColor:"black"
        }
      }
      //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      //   noValidate
      //   autoComplete="off"
    >
      <TextField
        sx={{
          width: "100%",
        }}
        onChange={(e) => handler(id, id === "file" ? e.target.files[0] : e.target.value)}
        id="outlined-basic"
        label={label}
        type={type}
        value={value}
        variant="outlined"
      />
    </Box>
  );
}
