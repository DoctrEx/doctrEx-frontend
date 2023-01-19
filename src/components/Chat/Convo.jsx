// import React, { useEffect } from "react";
// import { useState } from "react";
// import io from "socket.io-client";
// import ScrollToBottom from "react-scroll-to-bottom";
// // import "../../src/Chat/Convo.css"
// const socket = io.connect("http://localhost:8080");
// export const Convo = () => {
//   const sender = {
//     id: localStorage.getItem("id"),
//     name: localStorage.getItem("name"),
//   };
//   const receiver = { id: 2, name: "pane" };
//   console.log(receiver); // friend : {id,name}
//   const room = `${receiver.id + sender.id}`; // room : {userId-friendId}
//   // const room = "room"        // room : {userId-friendId}
//   console.log("room", room);
//   // console.log("User in chat",user)
//   function joinRoom() {
//     socket.emit("join_room", sender.name, room);
//   }
//   joinRoom();
//   const [message, setMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);
//   // const [key, setKey] = useState(0);

//   const sendMessage = () => {
//     const messageData = {
//       room: room,
//       author: sender.name,
//       message: message,
//       time:
//         new Date(Date.now()).getHours() +
//         ":" +
//         new Date(Date.now()).getMinutes(),
//     };
//     socket.emit("send", messageData);
//     // socket.broadcast.emit('recieve', {message:message,name:users[socket.id]})
//     setMessageList((list) => [...list, messageData]);
//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("recieve_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//     socket.on("some_event", (data) => {
//       console.log("someevent");
//     });
//   }, [socket]);
//   return (
//     <div className="convo">
//       <div className="chat-header">Let's Connect With {receiver.name}</div>
//       <div className="chat-body">
//         <ScrollToBottom>
//           {messageList.map((messageContent) => {
//             return (
//               // add key
//               <div
//                 className="message"
//                 id={sender.name === messageContent.username ? "you" : "other"}
//               >
//                 <div className="">
//                   <div className="message-content">
//                     <p>
//                       {messageContent.author} : {messageContent.message}
//                     </p>
//                   </div>
//                   <div className="message-meta">
//                     {/* <h1>{messageContent.author}</h1>
//                       <h1>{messageContent.time}</h1> */}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           placeholder="Type Something......"
//           value={message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//           }}
//           onKeyPress={(e) => {
//             e.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// };
