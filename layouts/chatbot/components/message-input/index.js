
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useEffect, useState } from "react";

function MessageInput({handleNewMessage}) {
  const [inputValue, setInputValue] = useState(''); 
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleNewMessage(inputValue)
    setInputValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} position="fixed" sx={{ width: '50%', left: '35%', right: '1rem', bottom: "2rem" }}>
        <Grid item xs={2} md={2}>
          <Button  variant="outlined" disabled>history</Button>
        </Grid>
        <Grid item xs={6} md={8}>
          <TextField fullWidth variant="outlined" value={inputValue} onChange={handleChange} />
        </Grid>
        <Grid item xs={2} md={2}>
           <Button variant="contained" type="submit" color='primary'>send</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default MessageInput;
