import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({
    title,
    icon,
    handler
}) {
  return (
    <Stack spacing={2} direction="row">
      
      <Button onClick={handler} startIcon={icon} variant="contained">{title}</Button>
      
    </Stack>
  );
}
