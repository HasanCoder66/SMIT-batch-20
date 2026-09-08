import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import DoneIcon from '@mui/icons-material/Done';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
    //   className='text-red-700'
     sx={{
color:"red",
fontSize:"20px"
     }}
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        // deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
