// "use client";

import ChatBot from "layouts/chatbot";

export default function Page() {
  // const [messages, setMessages] = useState<ChatGPTMessage[]>([
  //   {
  //     content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     role: "assistant"
  //   }, {
  //     content:  "1914 translation by H. Rackham",
  //     role: "user"
  //   }, {
  //     content:  "Bibendum est ultricies integer quis auctor elit. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sempt.",
  //     role: "assistant"
  //   }, {
  //     content:  "Bibendum est ultricies integer quis auctor elit. Semper aucer dignissim cras tincidunt lobortis. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Semper quis lectus nulla at volutpat.",
  //     role: "assistant"
  //   }, {
  //     content: "Try again",
  //     role: "user"
  //   }, {
  //     content: "uis auctor elit. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Semper quis lectus nulla at volutpat.",
  //     role: "assistant"
  //   }
  // ]);
  // const [messages, setMessages] = useState<ChatGPTMessage[]>([]);

  // useEffect(() => {
  //   async function getHistoryData() {
  //     try {
  //       const response = await fetch('/api/message'); // 替换为实际的 API URL
  //       if (!response.ok) {
  //         throw new Error("获取聊天记录时出现问题");
  //       }
  //       const result = await response.json();
  //       const messages = result.map((res: IChatMessage) => {
  //         return {
  //           role: res.sender,
  //           content: res.text
  //         }
  //       })
  //       setMessages(messages);
  //     } catch (error) {
  //       console.log("获取聊天记录时出现问题", error)
  //     }
  //   }
  //   getHistoryData();
  // }, [])
  
  // async function handleNewMessage(value: string) {
  //   // console.log("value", value)
  //   const message: ChatGPTMessage = {
  //     content: value,
  //     role: "user"
  //   }
    
  //   setMessages((prevMessages) => [...prevMessages, message])
  //   // const response = await axios.post("http://localhost:3001/node/message", [message])
  //   // setMessages((prevMessages) => [...prevMessages, response.data.choices[0].message])
  //   const response = await fetch('/api/message', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ messages: [message] }),
  //   })
  //   // const response = await axios.post("/api/message", JSON.stringify([message]))
  //   const resJSON = await response.json()
  //   const resMsg = resJSON.response.choices[0].message
  //   setMessages((prevMessages) => [...prevMessages, resMsg])
  // }
  return (
    <>
      <ChatBot/>
    </>
  );
}
