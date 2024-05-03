import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/material';
import styles from "../styles/Home.module.css";

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChat((prevChat) => [...prevChat, message.trim()]);
      setMessage('');
    }
  };

  return (
    <Box className={styles.chatbot} style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px', }}>
      <div style={{ maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Finnaser
        </Typography>
        <Paper style={{ padding: 20, marginBottom: 20 }}>
          {chat.map((message, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              {message}
            </div>
          ))}
        </Paper>
        <TextField
        style={{ backgroundColor: 'white', color: 'white'}}
          fullWidth
          label="Type your message"
          variant="outlined"
          value={message}
          onChange={handleMessageChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            )
          }}
        />
      </div>
    </Box>
  );
};

export default Chatbot;
