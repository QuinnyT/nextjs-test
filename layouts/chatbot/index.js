// Material Dashboard 2 React components
"use client";

import MDBox from "components/MDComponents/MDBox";

import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

import MessageList from "./components/message-list";
import MessageInput from "./components/message-input";

function ChatBot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getHistoryData() {
      try {
        const response = await fetch('/api/message'); // 替换为实际的 API URL
        if (!response.ok) {
          throw new Error("获取聊天记录时出现问题");
        }
        const result = await response.json();
        const messages = result.map((res) => {
          return {
            role: res.sender,
            content: res.text
          }
        })
        setMessages(messages);
      } catch (error) {
        console.log("获取聊天记录时出现问题", error)
      }
    }
    getHistoryData();
  }, [])
  
  async function handleNewMessage(value) {
    // console.log("value", value)
    const message = {
      content: value,
      role: "user"
    }
    
    setMessages((prevMessages) => [...prevMessages, message])
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: [message] }),
    })
    
    const resJSON = await response.json()
    const resMsg = resJSON.response.choices[0].message
    setMessages((prevMessages) => [...prevMessages, resMsg])
  }
  return (
    <DashboardLayout>
      <Container pt={6} pb={3} sx={{ overflow: 'hidden' }}>
        { messages.length > 0 ?
            <MessageList messages={messages} /> : 
            <Typography sx={{ display: 'flex', height:'80%', justifyContent: 'center', alignItems: 'center'}}>Nothing here...</Typography>
        }
        <MessageInput handleNewMessage={handleNewMessage}/>
      </Container>
    </DashboardLayout>
  );
}

export default ChatBot;
