import { memo, useState } from "react";
import { io } from "socket.io-client";

function Chat () {
    const [chatData, setChatData] = useState<string[]>([]);
    console.log(chatData);
    
    const [message, setMessage] = useState<string>("");
    
    const socket = io("http://192.168.0.167:3000/");
    if (socket) {
        socket.on("chat", (data) => {
            setChatData([...chatData, data])
        });
    }

    function handleSend() {
        socket.emit("chat", message);
        setMessage("");
    }



    return <>
    
    
    
    {chatData.map((chat)=>{
        return <div key={chat} className="bg-gray-200 p-2 m-2">{chat}</div>
    })}
    
    <div><input type="text" onChange={(e)=>setMessage(e.target.value)}/><button onClick={handleSend}>Send</button></div>
    </>
}

export default memo(Chat)