// import io from "socket.io-client";
// import { Convo } from "./Convo";
// // import "./Chat.css";

// const socket = io.connect("http://localhost:8080");
// const ChatMessage = () => {
//   const sender = {
//     id: localStorage.getItem("id"),
//     name: localStorage.getItem("name"),
//   };
//   const receiver = { id: 2, name: "pane" };
//   console.log(receiver); // friend : {id,name}
//   const room = `${receiver.id}-${sender.id}`; // room : {userId-friendId}
//   // const room = "room"        // room : {userId-friendId}
//   console.log("room", room);
//   // console.log("User in chat",user)
//   function joinRoom() {
//     socket.emit("join_room", sender.name, room);
//   }
//   return (
//     <>
//       <div className="main">
//         <div className="left-main">
//           <h3>Join A Chat</h3>

//           <button onClick={joinRoom}></button>

//           <Convo
//             socket={socket}
//             username={sender.name}
//             room={room}
//             friend={receiver}
//           />
//         </div>
//         <div className="right-main">
//           {/* <Friend setFriend={setFriend} /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatMessage;
