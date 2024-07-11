import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useRef, useEffect } from "react";

function MessageList({messages}) {  
  const msgsEndRef = useRef(null);
  useEffect(() => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container sx={{height: '82vh', overflow: 'auto', mt: 5, mb: 10,}}>
      <Container>
        {messages.map((message, index) => (
          <Box key={index} sx={{
                                mb: 2,
                                display: 'flex',
                                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                              }}>
            <Paper sx={{
                     p: 2,
                     maxWidth: '80%',
                     borderRadius: 2,
                     bgcolor: message.role === 'user' ? 'secondary.light' : 'primary.light',
                     color: message.role === 'user' ? 'secondary.contrastText' : 'primary.contrastText',
                   }}
            >
              <Typography variant="body2">
                {message.content}
              </Typography>
            </Paper>
          </Box>
        ))}
        <div ref={msgsEndRef}></div>
      </Container>
    </Container>
  );
}

export default MessageList;
